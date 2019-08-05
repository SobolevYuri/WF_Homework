import BinarySearchTree from './class-tree.js';

const $insertNodeBtn = document.querySelector("#insert-btn");
const $updateNodeBtn = document.querySelector("#update-btn");
const $searchNodeBtn = document.querySelector("#search-btn");
const $deleteNodeBtn = document.querySelector("#delete-btn");
const $listDisplayBtn = document.querySelector("#list-display-btn");
const $treeDisplayBtn = document.querySelector("#tree-display-btn");

const $treeOutput = document.querySelector("#data-output");
const $insertUpdateKeyField = document.querySelector("#insert-update-key-field");
const $insertUpdateValueField = document.querySelector("#insert-update-value-field");
const $deleteSearchKeyField = document.querySelector("#delete-search-key-field");

const treeInstance = new BinarySearchTree();

$insertNodeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    treeInstance.insert($insertUpdateKeyField.value, $insertUpdateValueField.value);
});
$updateNodeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    treeInstance.update($insertUpdateKeyField.value, $insertUpdateValueField.value)
});
$searchNodeBtn.addEventListener('click', (e) => { 
    e.preventDefault();
    treeInstance.search($deleteSearchKeyField.value);
});
$deleteNodeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    treeInstance.delete($deleteSearchKeyField.value);
});

$listDisplayBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(treeInstance.traverse(true));
});




