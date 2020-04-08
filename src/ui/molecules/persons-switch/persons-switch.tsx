import React from 'react';
import { ContentSwitcher, Switch } from 'carbon-components-react';

const PersonSwitch: React.StatelessComponent<{
	onChange: (index: number | undefined) => void;
}> = props => {
	return (
		<ContentSwitcher onChange={(_e, index) => props.onChange(index)} selectedIndex={0}>
			<Switch onClick={() => {}} selected={false} text="Person 1" />
			<Switch onClick={() => {}} selected={false} text="Person 2" />
		</ContentSwitcher>
	);
};

export default PersonSwitch;
