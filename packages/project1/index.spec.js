const project1 = require('.');
const project2 = require('project2');

test('Project 1', () => {
    expect(project1()).toEqual('project1');
});

test('Project 2 in Project 1', () => {
    expect(project2()).toEqual('project2');
});