/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  // Sets app default base URL
  app.baseUrl = '/';
  if (window.location.port === '') {  // if production
    // Uncomment app.baseURL below and
    // set app.baseURL to '/your-pathname/' if running from folder in production
    // app.baseUrl = '/polymer-starter-kit/';
  }

  // app.displayInstalledToast = function() {
  //   // Check to make sure caching is actually enabled—it won't be in the dev environment.
  //   if (!Polymer.dom(document).querySelector('platinum-sw-cache').disabled) {
  //     Polymer.dom(document).querySelector('#caching-complete').show();
  //   }
  // };

  app.sections = [
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

  app.languages = [
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

})(document);
