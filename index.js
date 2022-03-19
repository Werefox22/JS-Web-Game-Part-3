// create background
// have to do this first to make sure it appears behind all the other sprites
let backgroundImage = "assets/grass.png"

for (let y = 0; y < window.innerHeight; y += 100)
{
	if (y > 600)
	{
		backgroundImage = "assets/sky.png"
	}

	for (let x = 0; x < window.innerWidth; x+= 100)
	{
		move(newImage(backgroundImage)).to(x, y)
	}
}

// new image function
function newImage(url){
    let image = document.createElement('img')
    image.src = url
    document.body.append(image)
    return image
}

// move function
function move(element){
    element.style.position = 'fixed'

    // create function for positioning
    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    // return positioning function
    return {
        to: moveToCoordinates
    }
}

// create images
move(newImage('assets/green-character.gif')).to(100, 250)
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)

// new item function
function newItem(url){
    let item = newImage(url)

    // pickup item function
    item.addEventListener('click', () => {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url;

        inventory.add(inventoryItem)
    })

    return item
}

// create items
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)

// inventory function
function newInventory(){
    // create inventory
    let inventory = document.createElement('div')
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)

    // position inventory
    move(inventory).to(0, 0)

    // create add function
    function addItem(item) {
        inventory.append(item)
    }

    // return add function
    return {
        add: addItem
    }
}

// assign inventory to a variable so we can reference it later
const inventory = newInventory()