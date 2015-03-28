jquery-randomise
=============================================================
jquery-randomise is a JQuery plugin designed to fill forms with random, relevant information. For example:

*Text inputs for names will populate with a random name
*Text inputs for emaill addresses will populate with a random email address
*Text inputs for addresses will populate with a random address
*And so on. Here is the full list of supported randomisations
..*First name
..*Last name
..*Full name
..*Street
..*City
..*Town
..*Post code
..*Zip code
..*Date
*Anything else will be filled with a random string or number
*Currently supported input types
..*Select
..*Textarea
..*Input type="text"
..*Input type="email"
..*Input type="number"

##Installation

### The quick way
`wget https://raw.githubusercontent.com/mikedhart/jquery-randomise/master/dist/jquery.randomiser.min.js && cp jquery.randomise.min.js your/project/js/directory`

### The complicated way
`git clone git@github.com:mikedhart/jquery-randomise.git`

### Either way
Which ever way you choose, you'll need to add this to your HTML file
```html
<script src="path/to/js/jquery.min.js"></script>
<script src="path/to/js/jquery.randomise.min.js"></script>
```

## Example Usage
jquery-randomise inputs only
```javascript
$('input').randomise();
```

jquery-randomise selects only
```javascript
$('select').randomise();
```

jquery-randomise text areas only
```javascript
$('textarea').randomise();
```

jquery-randomise all three
```javascript
$('textarea, input, select').randomise();
```

## Bugs/Issues
Please submit all bugs, issues and questions to https://github.com/mikedhart/jquery-randomise/issues

## Contribution
Create a new topic branch for every separate change you make.
