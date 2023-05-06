const content = document.querySelector('.content ul');
const input = document.querySelector('.content ul input');
const btnClose = document.querySelector('.content ul li i');
const btnRemoveAll = document.querySelector('.remove__all');

let tags = ['nodejs', 'reactjs'];

function render() {
    content.innerHTML = '';
    tags.map((tag, index) => {
        content.innerHTML += `<li>${tag}
                                <i class="uit uit-multiply" onclick="removeTags(${index})"></i>
                            </li>`;
    })
    content.appendChild(input);
    input.focus();
}
render();

function addTags(e) {
    if (e.key === 'Enter') {
        tags.push(input.value.trim());
        render();
        input.value = '';
    }
}

input.addEventListener('keydown', addTags);

function removeTags(index) {
    tags.splice(index, 1);
    render();
}

btnRemoveAll.addEventListener('click', () => {
    tags = [];
    render();
})