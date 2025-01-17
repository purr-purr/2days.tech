import { FC } from 'react';
import Image from 'next/image'
import Title from '@modules/common/Title';

import s from './Services.module.scss';
import TE_LOGO from '@images/clients-logo/trade-edge.png';
import SFC_LOGO from '@images/clients-logo/sfc.png';
import AKULA_LOGO from '@images/clients-logo/akula.png';
import LITE_LOGO from '@images/clients-logo/lite-finance.png';
import DELIVERY_LOGO from '@images/clients-logo/delivery.png';
import ALTER_LOGO from '@images/clients-logo/alter-energo.png';
import DELTRUCK_LOGO from '@images/clients-logo/deltruck.png';
import EXCELSA_LOGO from '@images/clients-logo/excelsa.png';


const Services: FC = () => {
	const pageTitle = 'Done Right, Done Fast';
	const pageDescription =
		'We are a tech company with 5+ years of experience, building scalable, high-performance web solutions using JavaScript, React, Next.js, Node.js, and TypeScript.';

	const servicesTitle = 'Services';
	const servicesList = [
		'Turnkey project development',
		'Custom and unique design',
		'Project adjustment, launch, and management',
		'Researching user needs for your business.',
	];

	const clientsList = [
		TE_LOGO, SFC_LOGO, AKULA_LOGO, LITE_LOGO, DELIVERY_LOGO, ALTER_LOGO, DELTRUCK_LOGO, EXCELSA_LOGO
	]

	return (
		<article className={s.container}>
			<Title color="primary" text={pageTitle} />
			<p className={s.description}>{pageDescription}</p>

			<ul className={s.offer}>
				<li>
					<Title size="small" color="primary" text={servicesTitle} />
					<ul className={s.offerServicesList}>
						{servicesList.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</li>
				<li>
					<Title size="small" color="primary" text="clients" />
					<ul className={s.offerClientsList}>
						{clientsList.map((logo) => (
							<li key={logo}>
								<Image alt="client logo" src={logo} />
							</li>
						))}
					</ul>
				</li>
			</ul>
		</article>
	);
};

export default Services;
