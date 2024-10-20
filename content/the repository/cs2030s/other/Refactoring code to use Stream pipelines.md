---
title: Refactoring code to use Stream pipelines
tags:
  - CS2030S
---
Converting code to use `Stream` pipelines can be slightly difficult due to multiple reasons, such as unfamiliarity with the API, or an inability to visualise.

This is a common question for PEs (specifically PE2).

An approach could be:
1. Consider how the question would be approached without considering functional programming.
2. Think of the relevant API calls.

---
> [!example]
> 
> Consider a list of students, where each student has an attribute `marks` which is a `double[]` containing all their marks for all their assessments, as well as a `name` which can be obtained from `getName()`. The `Student` class also contains a method `getMarks(double[] weights)`, which obtains the total mark based on the weights passed in.
> 
> Given another `double[],` `weights` which contains the weights of the assessments, get the list of students that score above a given mark `threshold`.

Doing this normally, we would
1. calculate all the marks for each student AND
2. remove all students not above threshold/add all students above threshold to a new list
3. get the names

```Java

List<String> getStudentsAboveThreshold(List<Student> students, 
	double[] weights, double threshold) {
	
	List<String> result = new ArrayList<String>();
	
	for (Student s : students) {
		if (s.getMarks(weights) > threshold) {
			result.add(student.getName());
		}
	}

	return result;
}

```

Now, if we think of it from the `Stream` pipeline perspective, 
1. we can `filter` all the students above threshold
2. we can `map` the `Student` objects into their names.

```Java

List<String> getStudentsAboveThreshold(List<Student> students, 
	double[] weights, double threshold) {
	
	return Stream.of(students)
		.filter(s -> s.getMarks(weights) > threshold) // step 1
		.map(s -> s.getName()) // step 2
		.toList(); // since they want a List<String>
}

```
