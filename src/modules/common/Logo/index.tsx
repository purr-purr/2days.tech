import { FC } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import { COMPANY_INFO } from '@utils/data';

import s from './Logo.module.scss';

const Logo: FC<{ classname?: string }> = ({ classname }) => {
	const logoText = `${COMPANY_INFO.NAME} ${COMPANY_INFO.TYPE}`;
	return (
		<Link className={cn(classname, s.container)} href="/">
			{logoText.toUpperCase()}
		</Link>
	);
};

export default Logo;
