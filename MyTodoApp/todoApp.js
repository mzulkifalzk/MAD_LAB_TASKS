var list = document.getElementById('addForm');
var item = document.getElementById('items');

list.addEventListener('submit', addItem);
item.addEventListener('click', removeItem);

function addItem(e) {
    e.preventDefault();
    var addItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(addItem));
    var delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger btn-sm delete';
    delBtn.appendChild(document.createTextNode('Remove'));
    li.appendChild(delBtn);
    item.appendChild(li);
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        var li = e.target.parentElement;
        item.removeChild(li);
    }
}