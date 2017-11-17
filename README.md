# isolate-form

An Angular directive for nested forms that prevents `$invalid` from propagating, allowing a nested form to be invalid without affecting its parent's validity.
 
Code originally written by [91K00](https://github.com/91K00), as seen [here](http://stackoverflow.com/questions/19333544/skip-nested-forms-validation-with-angularjs/24936234#24936234) and [here](https://github.com/angular/angular.js/issues/5858#issuecomment-50026221).

The original code does not work for AngularJS >=1.6.2. So it did modification based on the latest comments [here](https://github.com/angular/angular.js/issues/5858#issuecomment-344326469)
 
 **Usage:**

~~~html
 <form name="parent">
    <input type="text" ng-model="outside"/>
    <ng-form name="subform" isolate-form>
        <input type="text" ng-model="inside"/>
    </ng-form>
</form>
 
~~~

**Example:** [https://codepen.io/MOmega/pen/eeePPW](https://codepen.io/MOmega/pen/eeePPW)
