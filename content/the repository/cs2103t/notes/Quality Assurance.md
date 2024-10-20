---
tags:
  - software_engineering
  - CS2103/T
  - software_testing
title: Quality Assurance
---
# Testing

> [!abstract] Testing
> Operating system/component under specified conditions, observing or recording results, and making an evaluation of some aspect of the system or component.

1. Feed input to SUT (software under test)
2. Observe actual output
3. Compare actual output to expected output

# Regression Testing

> [!info] Regression testing
> When a system is modified, modification may result in some unintended and/or undesirable effects on system. This is called a regression.
> 
> Regression testing refers to the re-testing of software to detect regressions - retest all related components, even if they had been tested before.

## Test Automation

> [!abstract] Test automation
> An automated test case runs programmatically and the result is also determined as such. Reduces the effort to run test repeatedly and eliminates human error

> [!note] Semi-automated testing of CLI applications through input/output redirection
> - Feed apps with a sequence of test inputs
> - Compare actual output file with another file containing the expected output
>   
>   > [!example]
>   > `java AddressBook < input.txt > output.txt`

## JUnit

JUnit is a tool used to automate testing of Java Programs
# Developer Testing

> [!remark] Developer testing
> Developer testing is the testing done by the developers themselves as opposed to dedicated testers or end-users.

The cons of delaying testing:
- Locating cause of test case failure is difficult in larger search spaces
- Fixing a bug may require major rework
- A bug may hide other bugs

> [!quote] The earlier a bug is found, the easier and cheaper to have it fixed.

## Developer Testing

> [!remark] Developer testing
> Developer testing is the testing done by the developers themselves as opposed to dedicated testers or end-users.

The cons of delaying testing:
- Locating cause of test case failure is difficult in larger search spaces
- Fixing a bug may require major rework
- A bug may hide other bugs

> [!quote] The earlier a bug is found, the easier and cheaper to have it fixed.

## Unit Testing

> [!definition] Test driver
> A test driver is the code that drives the SUT for the purpose of testing. 

> [!definition] Unit testing
> Testing individual units to ensure each piece works correctly.

### Stubs

A proper unit test requires units to be tested in isolation, so bugs in dependencies cannot influence the test.

> [!definition] Stubs
> Stubs have the same interface as the component replaced, but the implementation is simplified to prevent bugs. It mimicks responses for a limited set of predetermined inputs. Mimicked responses are hard-coded in the stub.


## Integration Testing

> [!definition] Integration testing
> Testing whether different parts of the software work together as expected.

Integration tests are specifically additional test cases that focus on interactions between the parts.

## System Testing

> [!definition] System testing
> Taking the whole system and testing it against the system specification

System test cases are based on the specified external behaviour of the system. System tests can go beyond the bounds defined to test that the system fails gracefully when pushed beyond limits.

System testing includes testing against non-functional requirements:
1. Performance testing
2. Load testing
3. Security testing
4. Compatibility/interoperability testing
5. Usability testing
6. Portability testing

## Test Automation

> [!example] Testing tools
> TestFX, Visual Studio, Selenium

Testing GUI is much harder than CLI/API, as
- Most GUIs can support a large number of different operations to be performed in arbitrary order
- GUI operants are more difficult to automate than API testing - verifying automatically if GUI behaves as expected is more difficult than comparing a return value with an expected value.
- GUI appearances can vary across platforms.

## Acceptance Testing

> [!definition] Acceptance testing
> Test the system to ensure it meets the user requirements

Acceptance testing also tests the whole system but differs -
1. Acceptance testing is done against requirements specification while system testing is done against system specification
2. Acceptance testing is done by a team representing customers while system testing is done by testers of the project team
3. Acceptance testing is done on the deployment site (or a simulation of it) while system testing is done on the development environment/test bed
4. Acceptance testing focuses on positive test cases but system testing generally focuses on both

> [!note] Positive and negative test cases
> Negative test cases refer to cases where the SUT is not expected to work normally, while positive test cases refer to those where the SUT is expected to work normally.

## Alpha-Beta Testing

> [!definition] Scripted testing
> Write a set of test cases based on expected behaviour, then perform testing based on that set of test cases.

> [!definition] Exploratory testing
> also known as reactive testing, error guessing technique, attack-based testing, and bug hunting.
> 
> Devise test cases on-the-fly, creating new test cases based on results of past test cases.

Expalnatory testing allows for detection of problems in relatively short time, but it remains not prudent to use exploratory testing as the sole means of testing a critical system. Scripted testing is more systematic, and hence likely to discover more bugs, given sufficient time.

## Dependency Injection

> [!definition] Dependency injection
> The process of 'injecting' objects to replace current dependencies with a different object

Polymorphism can be used to implement dependency injection.
# Static Analysis

> [!definition] Static analysis
> The analysis of code without actually executing the code

This process helps to find useful information such as
- unused variables
- unhandled exceptions
- style errors
- statistics

**Static** means that the code is analyzed without executing code, as opposed to dynamic, which analyzes the code executed to find additional information.

Higher end static analyzers can perform more complex analysis,
- to find potential bugs
- memory leaks
- inefficient data structures

> [!example]
> CheckStyle, PMD, FindBugs

> [!note] Linters
> A subset of static analyzers that locate where the code can be cleaner.
> > [!example] 
> > ESLint

# Code Reviews

> [!definition] Code review
> The systematic examination of code with the intention of finding where the code can be improved.

1. Pull request reviews
	- New code can be proposed as Pull Requests.
2. In pair programming
	- Implicit review of code by other member of pair
3. Formal inspections
	- Group of people tasked on systematically examining project artifacts
		- Author, moderator, secretary, inspector

> [!success] Advantages
> - Can detect functionality defects, coding standard violations
> - Verify non-code artifacts, incomplete code
> - Does not require test drivers or stubs

> [!danger] Disadvantages
> - Manual process - error prone

## Strategies

1. Rephrase objection as question
2. Avoid hyperbole
3. Avoid snide comments
4. Engage positively
5. Remember that not everybody's experience is identical
6. Don't diminish complexity
7. Be respectful
8. Manage expectations
9. Say please
10. Start a conversation

# Testability

> [!definition] Testability
> An indication of how easy it is test an SUT.

## Test Coverage

> [!definition] Test coverage
> A metric used to measure the extent to which testing exercises the code.

1. Function/method coverage (based on functions executed)
2. Statement coverage (based on the number of lines of code executed)
3. Decision/branch coverage (based on decision points exercised)
4. Condition coverage (based on boolean sub-expressions)
5. Path coverage (based on possible paths through a given part of the code)
6. Entry/exit coverage (based on possible calls to and exits from the operations in the SUT)

## Test-Driven Development

> [!definition] Test-driven development
> Writing the tests before writing SUT, while evolving functionality and tests in small increments.

1. Decide which behaviour to implement
2. Write/modify a test case to test behaviour
3. Run test cases and watch them fail
4. Implement behaviour
5. Run test cases
6. Keep modifying code and rerunning test cases until they all pass
7. Refactor code to improve quality
8. Repeat cycle

> [!important] Rules of TDD
> 1. You are not allowed to write any production code unless it is to make a failing unit test pass
> 2. You are not allowed to write any more of a unit test than is sufficient to fail, and compilation failures are failures
> 3. You are not allowed to write any more production code than is sufficient to pass the one failing unit test.

