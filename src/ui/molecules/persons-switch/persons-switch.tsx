import React from 'react';
import { ContentSwitcher, Switch } from 'carbon-components-react';
import PersonTypesEnum from 'src/constants/persons-types.enum';

const PersonSwitch: React.StatelessComponent<{
	onChange: (selectedPerson: PersonTypesEnum) => void;
}> = props => {
	return (
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
	);
};

export default PersonSwitch;
