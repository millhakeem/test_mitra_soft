import { memo } from 'react';
import { Image } from 'react-bootstrap';
import { ReactComponent as PersonIcon } from '/src/assets/person-circle.svg';

export enum AvatarSize {
	SMALL = '40px',
	LARGE = '80px',
}

export interface AvatarProps {
	src?: string;
	alt?: string;
	size?: AvatarSize;
	className?: string;
}

export const Avatar = memo((props: AvatarProps): JSX.Element => {
	const { src = '', alt = 'avatar', size = AvatarSize.SMALL, className = '' } = props;

	let content;

	if (src) {
		content = (
			<Image
				src={src}
				alt={alt}
				width={size}
				height={size}
				roundedCircle
			/>
		);
	} else {
		content = (
			<PersonIcon
				width={size}
				height={size}
			/>
		);
	}

	return <div className={className}>{content}</div>;
});
