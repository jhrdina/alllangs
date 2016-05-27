var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AlApp = (function (_super) {
    __extends(AlApp, _super);
    function AlApp() {
        _super.apply(this, arguments);
        this.sections = [
            {
                title: 'General',
                constructs: [
                    {
                        title: 'Multi-line string',
                        solutions: {
                            'cplusplus': "std::string HELP_MSG =\n    \"great text\\n\"\n    \"with multiple\\n\"\n    \"lines\\n\";",
                            'js': "var HELP_MSG =\n  'great text\\n' +\n  'with multiple\\n' +\n  'lines';"
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
                            'cplusplus': "for (auto const &iter : messagesByServer) {\n    std::string &key = iter.first;\n    Message &value = iter.second;\n}"
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
                            'cplusplus': "#include <stdexcept>\n#include <string>\n\nclass CustomException: public std::runtime_error {\npublic:\n    CustomException(std::string message):\n        std::runtime_error(message) {}\n};",
                            'java': "public class CustomException extends Exception {\n    public CustomException(String message) {\n        super(message);\n    }\n}"
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
                            'java': "try {\n    // Code that should throw an exception\n} catch (CustomException e) {\n    System.err.println(e.getMessage());\n}",
                            'cplusplus': "try {\n    // Code that should throw an exception\n} catch (const CustomException& e) {\n    std::cerr << e.what() << std::endl;\n}",
                            'js': "try {\n  // Code that should throw an exception\n} catch(err) {\n  console.log(err.message);\n}"
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
                            'cplusplus': "#include <fstream>\n\nstd::ifstream fr(\u201Csoubor.txt\u201D);\n\nstd::string line;\nwhile (std::getline(fr, line)) {\n    std::cout << line << std::endl;\n}\n\nfr.close();",
                            'java': "try (BufferedReader br = new BufferedReader(new FileReader(file))) {\n    String line;\n    while ((line = br.readLine()) != null) {\n       System.out.println(line);\n    }\n}",
                            'js': "var fileInput = document.getElementById('fileInput');\n\nvar reader = new FileReader();\n\nreader.onload = function(e) {\n  var lines = reader.result.split('\n');\n  for(var i = 0; i < lines.length; i++) {\n    console.log(lines[i]);\n  }\n}\n\nreader.readAsText(fileInput.files[0]);"
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
        this.languages = [
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
    AlApp = __decorate([
        component('al-app'), 
        __metadata('design:paramtypes', [])
    ], AlApp);
    return AlApp;
}(polymer.Base));
AlApp.register();
