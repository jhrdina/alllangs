/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts"/>

@component('al-app')
class AlApp extends polymer.Base
{
  sections = [
    {
      title: 'General',
      constructs: [
        {
          title: 'Multi-line string',
          solutions: {
            'cplusplus': `std::string HELP_MSG =
    "great text\\n"
    "with multiple\\n"
    "lines\\n";`,
            'js': `var HELP_MSG =
  'great text\\n' +
  'with multiple\\n' +
  'lines';`
          }
        },
        {
          title: 'Call a static method',
          solutions: {
            'cplusplus': 'AmazingClass::method();',
            'java': 'AmazingClass.method();',
            'js': 'AmazingClass.method();'
          }
        },
      ]
    },
    {
      title: 'Collections',
      constructs: [
        {
          title: 'Create a list of strings',
          solutions: {
            'java': 'ArrayList<String> list = new ArrayList<String>();',
            'cplusplus': 'std::vector<std::string> list;',
            'js': 'var list = [];'
          }
        },
        {
          title: 'Append a new object at the end of the list',
          solutions: {
            'java': 'list.add(new Message(param));',
            'cplusplus': 'list.push_back(Message(param));',
            'js': 'list.push(new Message(param));'
          }
        },
        {
          title: 'Length of list',
          solutions: {
            'java': 'list.size();',
            'cplusplus': 'list.size();',
            'js': 'list.length'
          }
        },
        {
          title: 'Hash table',
          solutions: {
            'cplusplus': 'std::map<std::string, Message> table;',
            'js': 'var table = {};'
          }
        },
        {
          title: 'Add item to hash table',
          solutions: {
            'cplusplus': 'table["text"] = Message(param);',
            'js': 'table[\'text\'] = new Message(param);'
          }
        },
        {
          title: 'Check that key exists',
          solutions: {
            'cplusplus': 'bool exists = table.count("text");',
            'js': 'var exists = table.hasOwnProperty(\'text\');'
          }
        },
        {
          title: 'Iterate over hashtable items',
          solutions: {
            'cplusplus': `for (auto const &iter : messagesByServer) {
    std::string &key = iter.first;
    Message &value = iter.second;
}`
          }
        },
      ]
    },
    {
      title: 'Exceptions',
      constructs: [
        {
          title: 'Custom exception definition',
          solutions: {
            'cplusplus': `#include <stdexcept>
#include <string>

class CustomException: public std::runtime_error {
public:
    CustomException(std::string message):
        std::runtime_error(message) {}
};`,
            'java': `public class CustomException extends Exception {
    public CustomException(String message) {
        super(message);
    }
}`
          }
        },
        {
          title: 'Exception throwing',
          solutions: {
            'java': 'throw new CustomException("Message");',
            'cplusplus': 'throw CustomException("Message");',
            'js': 'throw \'Message\';'
          }
        },
        {
          title: 'Exception catching',
          solutions: {
            'java': `try {
    // Code that should throw an exception
} catch (CustomException e) {
    System.err.println(e.getMessage());
}`,
            'cplusplus': `try {
    // Code that should throw an exception
} catch (const CustomException& e) {
    std::cerr << e.what() << std::endl;
}`,
            'js': `try {
  // Code that should throw an exception
} catch(err) {
  console.log(err.message);
}`
          }
        }
      ]
    },
    {
      title: 'Files',
      constructs: [
        {
          title: 'Read file line by line',
          solutions: {
            'cplusplus': `#include <fstream>

std::ifstream fr(“soubor.txt”);

std::string line;
while (std::getline(fr, line)) {
    std::cout << line << std::endl;
}

fr.close();`,
            'java': `try (BufferedReader br = new BufferedReader(new FileReader(file))) {
    String line;
    while ((line = br.readLine()) != null) {
       System.out.println(line);
    }
}`,
            'js': `var fileInput = document.getElementById('fileInput');

var reader = new FileReader();

reader.onload = function(e) {
  var lines = reader.result.split('\n');
  for(var i = 0; i < lines.length; i++) {
    console.log(lines[i]);
  }
}

reader.readAsText(fileInput.files[0]);`
          }
        }
      ]
    },
    {
      title: 'Conversions',
      constructs: [
        {
          title: 'Convert integer to string',
          solutions: {
            'cplusplus': 'std::string numAsStr = std::to_string(42);',
            'java': 'String numAsStr = Integer.toString(42);',
            'js': 'var numAsStr = (42).toString();'
          }
        }
      ]
    }
  ];

  languages = [
    {
      id: 'cplusplus',
      name: 'C++',
      prism: 'cpp'
    },
    {
      id: 'java',
      name: 'Java',
      prism: 'java'
    },
    {
      id: 'js',
      name: 'JavaScript',
      prism: 'javascript'
    },
  ];
}

AlApp.register();
