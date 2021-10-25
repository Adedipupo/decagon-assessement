"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(firstName, lastName, age, gender) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.age = age;
        _this.gender = gender;
        return _this;
    }
    Member.prototype.getInfo = function () {
        return "\n        this.firstName = " + prompt('What is your first name?') + "\n        this.lasttName = " + prompt('What is your last name?') + "\n        this.age = " + prompt('What is your age?') + "\n        this.gender = " + prompt('What is your gender?') + "\n        ";
    };
    Member.prototype.getFullDetails = function () {
        return "Your details are : \n        Name: " + (this.firstName + this.lastName) + "\n        Age: " + this.age + "\n        Gender: " + this.gender + "\n        ";
    };
    return Member;
}(Person));
var newMember = new Member('Benedict', 'Jokanola', 12, 'male');
newMember.getInfo();
console.log(newMember);
