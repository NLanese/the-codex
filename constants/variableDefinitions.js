import Styles from "../styles/styles"

const VariableDefinitionsList = [
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
        title: "Operators",
        definition: "Operators are characters or phrases that are used to manipulate the value of a variable. Common operators are (+) for addition, (-) for subtraction, (*) for multiplication, and (/) for division.",
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
    }
]

export default VariableDefinitionsList