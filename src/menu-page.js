import './menu.css';

export default function menuPageComponent() {
	const menuContainer = document.createElement('div');
	menuContainer.classList.add('menu-container');

	menuContainer.appendChild(menuComponent());

	return menuContainer;
}

function menuComponent() {
	const menu = document.createElement('div');
	menu.classList.add('menu');

	const menuHeader = document.createElement('h2');
	menuHeader.textContent = 'Menu';
	menu.appendChild(menuHeader);

	menu.appendChild(
		menuSectionComponent('Appetizers', [
			menuItemComponent(
				'Seared Scallops',
				'Tender, succulent scallops seared to perfection, served with a refreshing mango salsa.',
				'$18.00'
			),
			menuItemComponent(
				'Grilled Shrimp Skewers',
				'Juicy, plump shrimp skewered and grilled with a delicious blend of herbs and spices.',
				'$16.00'
			),
			menuItemComponent(
				'Wild Mushroom Tart',
				'A flaky puff pastry filled with a creamy mixture of wild mushrooms and herbs.',
				'$14.00'
			),
		])
	);
	menu.appendChild(
		menuSectionComponent('Entrees', [
			menuItemComponent(
				'Pan-Seared Duck Breast',
				'Mouth-watering duck breast infused with fragrant spices and served with a savory cherry sauce. Served with seasonal vegetables and roasted potatoes.',
				'$32.00'
			),
			menuItemComponent(
				'Grilled Chilean Sea Bass',
				'A succulent fillet of Chilean Sea Bass grilled to perfection and served with a tangy citrus glaze. Accompanied by a side of roasted root vegetables and creamy mashed potatoes.',
				'$38.00'
			),
			menuItemComponent(
				'Lobster Risotto',
				'Creamy risotto with tender, succulent chunks of lobster meat, topped with a drizzle of truffle oil.',
				'$38.00'
			),
			menuItemComponent(
				'Grilled New York Strip',
				'A juicy, flavorful cut of steak grilled to perfection, served with a side of garlic mashed potatoes and sautéed spinach.',
				'$42.00'
			),
		])
	);
	menu.appendChild(
		menuSectionComponent('Desserts', [
			menuItemComponent(
				'Flourless Chocolate Cake',
				'A rich, indulgent cake made with high-quality chocolate and dusted with powdered sugar.',
				'$12.00'
			),
			menuItemComponent(
				'Lemon Tart',
				'A tangy and refreshing lemon filling in a crispy shortcrust pastry, served with a dollop of whipped cream.',
				'$12.00'
			),
			menuItemComponent(
				'Crème Brûlée',
				'A creamy vanilla custard with a crispy caramelized sugar top.',
				'$10.00'
			),
		])
	);
	menu.appendChild(
		menuSectionComponent('Beverages', [
			menuItemComponent(
				'Savoré Bistro Signature Cocktail',
				'A refreshing blend of vodka, fresh-squeezed grapefruit juice, and honey, garnished with a sprig of rosemary.',
				'$14.00'
			),
			menuItemComponent(
				'Red Wine Flight',
				"A flight of three red wines carefully curated to showcase the best of the season's offerings.",
				'$20.00'
			),
			menuItemComponent(
				'Iced Tea',
				'A refreshing and classic iced tea made with fresh mint leaves.',
				'$4.00'
			),
		])
	);
	menu.appendChild(
		menuSectionComponent('Sides', [
			menuItemComponent(
				'Truffle Fries',
				'Crispy shoestring fries tossed with truffle oil and grated Parmesan cheese.',
				'$8.00'
			),
			menuItemComponent(
				'Sautéed Spinach',
				'Fresh spinach leaves sautéed in garlic and olive oil.',
				'$6.00'
			),
			menuItemComponent(
				'Grilled Asparagus',
				'Tender asparagus spears grilled to perfection and seasoned with sea salt and lemon zest.',
				'$10.00'
			),
		])
	);
	return menu;
}

function menuSectionComponent(sectionTitle, arrayOfItems) {
	const sectionContainer = document.createElement('div');
	sectionContainer.classList.add('menu-section');

	const sectionHeader = document.createElement('h3');
	sectionHeader.classList.add('section-header');
	sectionHeader.textContent = sectionTitle;

	sectionContainer.appendChild(sectionHeader);

	arrayOfItems.forEach((menuItem) => sectionContainer.appendChild(menuItem));
	return sectionContainer;
}

function menuItemComponent(name, description, price) {
	const menuItemContainer = document.createElement('div');
	menuItemContainer.classList.add('menu-item-container');

	const priceContainer = document.createElement('p');
	priceContainer.classList.add('menu-item-price');
	priceContainer.textContent = price;

	const descriptionContainer = document.createElement('p');
	descriptionContainer.textContent = description;

	const nameContainer = document.createElement('p');
	nameContainer.classList.add('menu-item-name');
	nameContainer.textContent = name;

	const nameAndDescriptionWrapper = document.createElement('div');
	nameAndDescriptionWrapper.appendChild(nameContainer);
	nameAndDescriptionWrapper.appendChild(descriptionContainer);

	menuItemContainer.appendChild(nameAndDescriptionWrapper);
	menuItemContainer.appendChild(priceContainer);

	return menuItemContainer;
}
