(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const add = function(num1, num2) {
  return num1 + num2;
}

module.exports = add;
},{}],2:[function(require,module,exports){
const add = require('./adder.js');

class ViewManager {

	connectEventHundlers() {
		document.getElementById('form-numbers')
		.addEventListener('submit', this.onSubmit.bind(this));
	}

	onSubmit(event) {
		event.preventDefault();
		let num1 = document.getElementById('input-num1').value;
		let num2 = document.getElementById('input-num2').value;
		num1 = parseInt(num1, 10);
		num2 = parseInt(num2, 10);
		const sum = add(num1, num2);
		this.renderResult(sum);
	}

	renderResult(sum) {
		const element = document.getElementById('result');
		element.innerText = sum.toString();
	}
}

const viewManager = new ViewManager();
viewManager.connectEventHundlers();
},{"./adder.js":1}]},{},[2]);
