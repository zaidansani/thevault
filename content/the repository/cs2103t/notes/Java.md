---
tags:
  - java_programming
  - software_engineering
title: Java
---
# JavaDoc

> [!info] JavaDoc
> JavaDoc is used to generate API documentation in HTML format from comments in the source code.

In IDEs, JavaDoc comments are often visible by hovering over the method, allowing the user to read explanatory tooltips that can inform their programming.

# File Access

The `java.io.File` class can be used to represent file objects. With an object of the `File` class, the properties, its existence, and its path can be accessed.

The `java.util.Scanner` class allows reading from a `File` object.

To write to files, a `FileWriter` object can be used. 
# Packages

Types (classes, interfaces, enumerations) can be organised into packages for easier management. 

To create a package, add a package statement at the top of the source file `package PACKAGE_NAME;`. Package name is written in all lower case, with the `.` as a separator.

To use a public package member from outside its package:

1. Use the Fully Qualified Name (FQN) to refer to the member
   
> [!definition] Fully Qualified Name
> Type name prefixed by the package name.

2. Import package/specific package member

> [!remark] 
> Importing a package does not import its sub-packages. 

# JAR

> [!definition] JAR
> Java Archive files are used to deliver Java applications. They generally contain Java classes, and other resources.

To run JAR files, the command `java -jar FILENAME`. 
To build JAR files, build tools/IDE can package the application into a JAR file.

# JavaFX

JavaFX is used to build Java-based GUIs.

# Varargs

> [!definition] Syntactic sugar
>  Syntax within a programming language that is designed to make things easier to read or to express.

Variable arguments (Varargs) allows writing a method with a variable number of arguments.

> [!example] 
> The main method is an example of this.
> `public static void main(String ...args)` allows for command line running of the code with multiple arguments.

