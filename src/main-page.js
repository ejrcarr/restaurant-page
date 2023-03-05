import './style.css';
import HeroBackground from './assets/hero-background.jpg';
import DuckImage from './assets/duck-breast.jpg';
import SeaBassImage from './assets/seabass.jpg';

export default function mainPageComponent() {
	const mainPageDiv = document.createElement('div');
	mainPageDiv.classList.add('main-page-container');

	mainPageDiv.appendChild(heroComponent());
	mainPageDiv.appendChild(moreSectionComponent());
	mainPageDiv.appendChild(quotationComponent());
	return mainPageDiv;
}

function heroComponent() {
	const heroContainer = document.createElement('div');
	heroContainer.classList.add('hero-section');
	heroContainer.style.backgroundImage = `url(./${HeroBackground})`;
	heroContainer.appendChild(heroTextComponent());
	heroContainer.appendChild(infoSectionComponent());

	return heroContainer;
}

function heroTextComponent() {
	const heroTextContainer = document.createElement('div');
	heroTextContainer.classList.add('hero-text-container');

	const heroText = document.createElement('div');
	heroText.classList.add('hero-text');

	const logoText = document.createElement('div');
	logoText.classList.add('logo');
	logoText.textContent = 'SB';

	const textText = document.createElement('div');
	textText.classList.add('text');
	textText.textContent = 'Experience the art of culinary fusion';

	const orderButton = document.createElement('button');
	orderButton.id = 'order-button';
	orderButton.type = 'button';
	orderButton.textContent = 'Order Now';

	heroText.appendChild(logoText);
	heroText.appendChild(textText);
	heroTextContainer.appendChild(heroText);
	heroTextContainer.appendChild(orderButton);

	return heroTextContainer;
}

function infoSectionComponent() {
	const infoSection = document.createElement('div');
	infoSection.classList.add('info-section');

	const factOne = document.createElement('div');
	factOne.textContent =
		'Savoré Bistro specializes in modern, fusion cuisine that combines global flavors with local ingredients to create unique, innovative dishes.';

	const factTwo = document.createElement('div');
	factTwo.textContent =
		"Savoré Bistro's menu changes regularly to showcase seasonal ingredients and keep the dining experience fresh and exciting for customers.";

	const factThree = document.createElement('div');
	factThree.textContent =
		'Savoré Bistro is committed to using sustainable, organic, and locally sourced ingredients whenever possible, in order to support the local community and promote eco-friendly practices.';

	infoSection.appendChild(factOne);
	infoSection.appendChild(factTwo);
	infoSection.appendChild(factThree);

	return infoSection;
}

function moreSectionComponent() {
	const moreSectionContainer = document.createElement('div');
	moreSectionContainer.classList.add('more-section');

	const sectionHeader = document.createElement('h2');
	sectionHeader.classList.add('more-section-title');
	sectionHeader.textContent = "Savoré Bistro's Culinary Masterpieces";

	const sectionIntroduction = document.createElement('p');
	sectionIntroduction.textContent = `Indulge in Savoré Bistro's culinary masterpieces, 
                     each dish crafted with an artful blend of flavors 
                     and textures. Our menu showcases a range of innovative 
                     fusion dishes that bring together global cuisine and 
                     local ingredients, resulting in an unforgettable dining 
                     experience.`;

	const sectionIntroductionTwo = document.createElement('p');
	sectionIntroductionTwo.textContent = `Our signature dishes include the mouth-watering Pan-Seared Duck Breast, infused with fragrant spices and served with a savory cherry sauce. For seafood lovers, the Chilean Sea Bass is a must-try, featuring succulent fillets grilled to perfection and served with a tangy citrus glaze.`;

	moreSectionContainer.appendChild(sectionHeader);
	moreSectionContainer.appendChild(sectionIntroduction);
	moreSectionContainer.appendChild(sectionIntroductionTwo);
	moreSectionContainer.appendChild(
		plateDemonstrationComponent(
			DuckImage,
			`Our Pan-Seared Duck Breast is a succulent dish infused with fragrant spices and served with a savory cherry sauce. The duck breast is seared to perfection, creating a crispy exterior while keeping the meat tender and juicy. The cherry sauce adds a sweet and tangy contrast to the savory duck, making it a perfect choice for diners looking for a luxurious and flavorful main course.`
		)
	);
	moreSectionContainer.appendChild(
		plateDemonstrationComponent(
			SeaBassImage,
			`Our Chilean Sea Bass is a must-try for seafood lovers. The succulent fillets are grilled to perfection, resulting in a crispy exterior and moist, buttery flesh that melts in your mouth. The fish is served with a tangy citrus glaze that adds a bright, refreshing flavor to the dish, enhancing the natural sweetness of the sea bass. It's a delicious and healthy choice that's sure to satisfy even the most discerning palate.`
		)
	);

	return moreSectionContainer;
}

function quotationComponent() {
	const quotationContainer = document.createElement('div');
	quotationContainer.classList.add('quotation-section');

	const sectionHeader = document.createElement('h2');
	sectionHeader.textContent = 'Reviews';

	const firstQuote = document.createElement('p');
	firstQuote.textContent = `'I've dined at Savoré Bistro multiple times, and each time has been an incredible experience. The flavors and presentation of each dish are simply outstanding, and the staff are always welcoming and attentive.'`;
	const quoteAuthorOne = document.createElement('span');
	quoteAuthorOne.textContent = `- Sarah L.`;
	firstQuote.appendChild(quoteAuthorOne);

	const secondQuote = document.createElement('p');
	secondQuote.textContent = `'The Chilean Sea Bass was to die for - I've never tasted fish that fresh and flavorful before. And the wine pairing was perfect!'`;
	const quoteAuthorTwo = document.createElement('span');
	quoteAuthorTwo.textContent = `- Mark C.`;
	secondQuote.appendChild(quoteAuthorTwo);

	const thirdQuote = document.createElement('p');
	thirdQuote.textContent = `'The Lobster Risotto was the highlight of my dining experience at Savoré Bistro. The creamy, perfectly cooked risotto was packed with rich, buttery flavor that paired perfectly with the tender, succulent chunks of lobster meat. The dish was beautifully presented with a sprinkle of fresh herbs and a drizzle of truffle oil, adding a touch of elegance to the dish. It was a decadent and unforgettable meal that left me craving for more.'`;
	const quoteAuthorThree = document.createElement('span');
	quoteAuthorThree.textContent = `- Emily J.`;
	thirdQuote.appendChild(quoteAuthorThree);

	quotationContainer.appendChild(sectionHeader);
	quotationContainer.appendChild(firstQuote);
	quotationContainer.appendChild(thirdQuote);
	quotationContainer.appendChild(secondQuote);

	return quotationContainer;
}

function plateDemonstrationComponent(image, description) {
	const plate = document.createElement('div');
	plate.classList.add('plate');

	const plateDescription = document.createElement('p');
	plateDescription.textContent = description;

	const duckImage = new Image();
	duckImage.src = `./` + image;

	plate.appendChild(plateDescription);
	plate.appendChild(duckImage);
	return plate;
}
