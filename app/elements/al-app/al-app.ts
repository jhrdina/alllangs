/// <reference path="../../../bower_components/polymer-ts/polymer-ts.d.ts"/>

@component('al-app')
class AlApp extends polymer.Base
{
  sections = [
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
      id: 'java',
      name: 'Java',
      prism: 'java'
    },
    {
      id: 'js',
      name: 'JavaScript',
      prism: 'javascript'
    },
    {
      id: 'cplusplus',
      name: 'C++',
      prism: 'cpp'
    }
  ];
}

AlApp.register();
