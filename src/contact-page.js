import './contact.css';
import ContactImage from './assets/contact-image.jpg';

export default function contactPageComponent() {
	const contactPageContainer = document.createElement('div');
	contactPageContainer.classList.add('contact-page-container');

	contactPageContainer.appendChild(contactPageHeroComponent());
	contactPageContainer.appendChild(contactInformationComponent());
	return contactPageContainer;
}

function contactPageHeroComponent() {
	const contactHeroContainer = document.createElement('div');
	contactHeroContainer.classList.add('contact-hero-container');
	contactHeroContainer.style.backgroundImage = `url(./${ContactImage})`;

	const contactHeroText = document.createElement('h1');
	contactHeroText.classList.add('contact-hero-title');
	contactHeroText.textContent = 'Contact Us';

	contactHeroContainer.appendChild(contactHeroText);
	return contactHeroContainer;
}

function contactInformationComponent() {
	const contactInfoContainer = document.createElement('div');
	contactInfoContainer.classList.add('contact-info');

	contactInfoContainer.appendChild(
		contactSectionWrapper(
			contactSectionTitleComponent('Contact Information'),
			`<p>We'd love to hear from you! Please feel free to reach out to us using the following contact information:</p>
            <ul>
            <li>Address: 123 Main Street, Anytown, USA 12345</li>
            <li>Phone: (555) 123-4567</li>
            <li>Email: info@savorebistro.com</li>
            </ul>`
		)
	);
	contactInfoContainer.appendChild(
		contactSectionWrapper(
			contactSectionTitleComponent('Hours of Operation'),
			`
            <ul>
            <li>Monday: Closed</li>
            <li>Tuesday - Thursday: 5:00pm - 10:00pm</li>
            <li>Friday - Saturday: 5:00pm - 11:00pm</li>
            <li>Sunday: 4:00pm - 9:00pm</li>
            </ul>`
		)
	);
	contactInfoContainer.appendChild(
		contactSectionWrapper(
			contactSectionTitleComponent('Reservations'),
			`<p>To make a reservation, please call us at (555) 123-4567 or book online via our website.</p>`
		)
	);
	contactInfoContainer.appendChild(
		contactSectionWrapper(
			contactSectionTitleComponent('Private Events'),
			`<p>We are happy to accommodate private events such as weddings, corporate functions, and other special occasions. Please contact us for more information on availability and pricing.</p>`
		)
	);
	contactInfoContainer.appendChild(
		contactSectionWrapper(
			contactSectionTitleComponent('Feedback'),
			`<p>We value your feedback and are committed to providing the best possible dining experience. Please let us know if there's anything we can improve upon or if you had an outstanding experience with us.</p>`
		)
	);
	return contactInfoContainer;
}

function contactSectionWrapper(title, descriptionHTML) {
	const infoWrapper = document.createElement('div');
	infoWrapper.appendChild(title);
	infoWrapper.innerHTML += descriptionHTML;
	console.log(infoWrapper.innerHTML);
	return infoWrapper;
}

function contactSectionTitleComponent(title) {
	const contactTitle = document.createElement('h2');
	contactTitle.textContent = title;

	return contactTitle;
}
