import React from 'react';
import { ContentSwitcher, Switch, Tag } from 'carbon-components-react';
import PersonTypesEnum from 'src/constants/persons-types.enum';
import styles from './persons-switch.module.scss';
import cx from 'classnames';

const PersonSwitch: React.StatelessComponent<{
	onChange: (selectedPerson: PersonTypesEnum) => void;
	newMessages: number;
	activePerson: PersonTypesEnum;
}> = props => {
	return (
		<div className={styles.contentSwitch}>
			<ContentSwitcher onChange={() => {}} selectedIndex={0}>
				<Switch
					index={0}
					onClick={() => props.onChange(PersonTypesEnum.PERSON_1)}
					selected={false}
					text="Person 1"
				/>
				<Switch
					index={1}
					onClick={() => props.onChange(PersonTypesEnum.PERSON_2)}
					selected={false}
					text="Person 2"
				/>
			</ContentSwitcher>
			{props.newMessages > 0 && (
				<Tag
					className={cx(styles.tag, {
						[styles.tagLeft]: props.activePerson === PersonTypesEnum.PERSON_2,
						[styles.tagRight]: props.activePerson === PersonTypesEnum.PERSON_1,
					})}
					type="blue"
				>
					{props.newMessages}
				</Tag>
			)}
		</div>
	);
};

export default PersonSwitch;
