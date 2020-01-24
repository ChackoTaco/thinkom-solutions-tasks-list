module.exports= plop => {
    plop.setGenerator('atom', {
        description: 'Create an atom component',
        // User input prompts provided as arguments to the template
        prompts: [{
            // Raw text input
            type: 'input',
            // Variable name for this input
            name: 'name',
            // Message to display
            message: 'What is your component name?'

        }],
        actions: [{
            // Add a new file
            type: 'add',
            // Path for the new file
            path: 'src/components/Atoms/{{pascalCase name}}/index.js',
            // Handlebars template used to generate content of new file
            templateFile: 'plop-templates/Atom.js.hbs',
        }]
    });

    plop.setGenerator('layout', {
        description: 'Create a layout component',
        // User input prompts provided as arguments to the template
        prompts: [{
            // Raw text input
            type: 'input',
            // Variable name for this input
            name: 'name',
            // Message to display
            message: 'What is your layout name?'

        }],
        actions: [{
            // Add a new file
            type: 'add',
            // Path for the new file
            path: 'src/components/Layout/{{pascalCase name}}/index.js',
            // Handlebars template used to generate content of new file
            templateFile: 'plop-templates/Layout.js.hbs',
        }]
    });

    plop.setGenerator('molecule', {
        description: 'Create a component',
        // User input prompts provided as arguments to the template
        prompts: [{
            // Raw text input
            type: 'input',
            // Variable name for this input
            name: 'name',
            // Message to display
            message: 'What is your molecule name?'

        }],
        actions: [{
            // Add a new file
            type: 'add',
            // Path for the new file
            path: 'src/components/Molecules/{{pascalCase name}}/index.js',
            // Handlebars template used to generate content of new file
            templateFile: 'plop-templates/Molecule.js.hbs',
        }]
    });

    plop.setGenerator('organism', {
        description: 'Create a component',
        // User input prompts provided as arguments to the template
        prompts: [{
            // Raw text input
            type: 'input',
            // Variable name for this input
            name: 'name',
            // Message to display
            message: 'What is your organism name?'

        }],
        actions: [{
            // Add a new file
            type: 'add',
            // Path for the new file
            path: 'src/components/Organisms/{{pascalCase name}}/index.js',
            // Handlebars template used to generate content of new file
            templateFile: 'plop-templates/Organism.js.hbs',
        }]
    });
    
    plop.setGenerator('template', {
        description: 'Create a component',
        // User input prompts provided as arguments to the template
        prompts: [{
            // Raw text input
            type: 'input',
            // Variable name for this input
            name: 'name',
            // Message to display
            message: 'What is your template name?'

        }],
        actions: [{
            // Add a new file
            type: 'add',
            // Path for the new file
            path: 'src/components/Templates/{{pascalCase name}}/index.js',
            // Handlebars template used to generate content of new file
            templateFile: 'plop-templates/Template.js.hbs',
        }]
    });
}