import Styles from "../styles/styles"

const BasicDefinitionsList = [
    {
        title: "Variable",
        definition: "A Variable is a way to keep track of information in computer science. We can 'read' and 'write' variables meaning we can at any time retrieve or change their values.",
        titleStyle: Styles.Fonts.h2,
        definitionStyle: Styles.Fonts.definition,
        color: "#ffd591"
    },

    {
        title: "Keywords",
        definition: "Keywords are phrases or words that have an inherent definition in whatever language you are currently using, and thus cannot be used as variable names. For example, words like 'if', 'else', 'let', and 'public' are some examples of keywords in JavaScript. These words cannot be used as variable names.",
        titleStyle: Styles.Fonts.h2,
        definitionStyle: Styles.Fonts.definition,
        color: "#ffd591"
    },

    {
        title: "Operators / Operations",
        definition: "Operators are characters or phrases that are used to manipulate the value of a variable. Common operators are (+) for addition, (-) for subtraction, (*) for multiplication, and (/) for division. The symbol itself is the Operator while the whole statement would be an operation. For example, if you were to aadd the value of two variables, you would have an operation that uses the ( + ) operator in order to get the sum of two variables.",
        titleStyle: Styles.Fonts.h2,
        definitionStyle: Styles.Fonts.definition,
        color: "#ffd591"
    },

    {
        title: "Programming Languages",
        definition: "Computers do not understand written (or typed) language. Rather, they speak in binary. To the human eye, binary language cannot be processed, so we created 'languages' with their own syntax, or 'grammer' that the computer compiler can understand well enough to translate into binary. This allows developers to create the files that we know of. Like in rela life, each language will have its own quirks, its own rules words and structure. Some Programming languages we will cover are Python, Java, JavaScript and C#.",
        titleStyle: Styles.Fonts.h2,
        definitionStyle: Styles.Fonts.definition,
        color: "#ffd591"
    },

    {
        title: "Datatypes",
        definition: "Every variable will have a data type, but depending on the Programming Language you are using, this data type can be changed. Data Types denote what kind of value is stored inside of the variable. For example, in x=5, x would be a variable with a datatype of an Integer",
        titleStyle: Styles.Fonts.h2,
        definitionStyle: Styles.Fonts.definition,
        color: "#a3fc2d"
    },

    {
        title: "Integer",
        definition: "This is one of the basic Datatypes. An integer is a whole number (no decimals) between -2,147,483,647 and 2,147,483,647. Any values higher or lower than this would not behave properly as an integer.",
        titleStyle: Styles.Fonts.h2,
        definitionStyle: Styles.Fonts.definition,
        color: "#d0f76d"
    },

    {
        title: "Float",
        definition: "Often times referred to as a Floating Point or a Floating Decimal. Floats were developed after Integers as a way to more easily express decimal values, and as such they have a similar range of values as well as a higher storage requirement than an integer.",
        titleStyle: Styles.Fonts.h2,
        definitionStyle: Styles.Fonts.definition,
        color: "#d0f76d"
    },

    {
        title: "Double",
        definition: "Nearly functionally identical to Floats, Doubles are simply even more precise number values than Floats. They can be used to express a much larger range of values, thus they are more 'heavy-duty' than Floats or Ints, but developers are able to represent almost any numerical value as a double, no matter how large.",
        titleStyle: Styles.Fonts.h2,
        definitionStyle: Styles.Fonts.definition,
        color: "#d0f76d"
    },

    {
        title: "Char",
        definition: "Any single character that is not used as a numeric value is considered a char. This means letters, symbols, and even numbers in the proper context can be stored as Chars. When creating a char value or assigning a char value to a variable, chars are usually defined as being inside single quotes. For example, char = 'e'.  \nAn important distinction with Chars is that mathematical operations do not work the same way with Chars as they do with numeric data types. For instance, 2 + 2 = 4, but '2' + '2' = '22'.",
        titleStyle: Styles.Fonts.h2,
        definitionStyle: Styles.Fonts.definition,
        color: "#bef576"
    },

    {
        title: "String",
        definition: "A string is a list of chars in consequtive order. For example, 'Hello World' is a string, but that really means it is just a list of 'H' followed by 'e' followed by 'l' and so on.",
        titleStyle: Styles.Fonts.h2,
        definitionStyle: Styles.Fonts.definition,
        color: "#bef576"
    },

    {
        title: "Declaring a Variable",
        definition: "Creating a variable in Computer Science is referred to as 'Declaring.' If I wanted to create and use a new variable, x, I would first have to declare it. In most languages, there will be a keyword immediately proceeding the variable name. For instance, in JavaScript, if I wanted to declare an empty variable x, I could do so by entering 'let x' or 'var x', as 'let' and 'var' are keywords for creating variables in JavaScript.",
        titleStyle: Styles.Fonts.h2,
        definitionStyle: Styles.Fonts.definition,
        color: "#88fccc"
    },

    {
        title: "Initializing a Variable",
        definition: "In most langauges, we can declare and initialize a variable at the same time. To initialize a variable simply means to assign a value to it. In our previous example, 'let x', we would simply need to add a value to the statement to consider x initialized. 'let x = 5' is an example of full variable initialization.",
        titleStyle: Styles.Fonts.h2,
        definitionStyle: Styles.Fonts.definition,
        color: "#88fccc"
    },

    {
        title: "Object Oriented Programming (OOP)",
        definition: "There are many standard practices of coding, but the newest and most widely used is Object Oriented Programming. This methodology of coding states that the best way to develop a program is to simulate real world objects and events through quantifiable data. Social Media Apps will create Classes to mimic these real world phenomena. There will be a Class for Posts, a Class for Users. a Class for Comments, and so on. These Classes will interact with each other just as people and 'posts' would on a real life media board. Other methodologies include Functional Programming, Data Oriented Programing, and Procedural Oriented Programing.",
        titleStyle: Styles.Fonts.h2,
        definitionStyle: Styles.Fonts.definition,
        color: "#81afeb"
    },

    {
        title: "Classes",
        definition: "Classes are advanced Datatypes that are created by a developer in order to simulate a real life item or concept. For example, social media sites have Classes for Posts. Every post will have a caption (String Datatype), an amount of likes (Integer), and date posted (String). Classes can have many different values assigned to different key names. Post.caption would return a post's caption.",
        titleStyle: Styles.Fonts.h2,
        definitionStyle: Styles.Fonts.definition,
        color: "#96c4ff"
    },

    {
        title: "Functions",
        definition: "Functions are blueprints of code created by a developer that can execute actions in a program. Simply put, functions are instructions we create as developers, and these instructions dictate how variables, classes, and other objects interact with each other in a program. Functions can exist on multiple levels, they can belong to and be unique to specific classes, or they could be global and be accessed anytime within a program.",
        titleStyle: Styles.Fonts.h2,
        definitionStyle: Styles.Fonts.definition,
        color: "#96c4ff"
    },

    {
        title: "Scope",
        definition: "Scope is the term used to describe the bounds of variables, classes, and functions. This means to say, the a variable declared in one scope (class, function, etc) may not exist in another scope. In the Social Media App example, a Comment would not have access to the 'Followers' variable because 'Followers' only exists with the scope of a User Class.",
        titleStyle: Styles.Fonts.h2,
        definitionStyle: Styles.Fonts.definition,
        color: "#96c4ff"
    },

]

export default BasicDefinitionsList