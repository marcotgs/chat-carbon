import React from 'react';
import { TextInput, Button, Form } from 'carbon-components-react';
// @ts-ignore
import Send24 from '@carbon/icons-react/lib/send/24';
import styles from './form-message.module.scss';

const FormMessageMolecule: React.StatelessComponent<{
	onSubmit: (e: React.FormEvent<HTMLElement>) => void;
}> = ({ onSubmit }) => {
	return (
		<>
			<Form className={styles.formChat} onSubmit={onSubmit}>
				<TextInput
					id="test2"
					name="message"
					hideLabel
					labelText=""
					placeholder="Send a message..."
					autoComplete="off"
				/>
				<Button
					className="some-class"
					disabled={false}
					iconDescription="Button icon"
					kind="primary"
					onClick={function noRefCheck() {}}
					onFocus={function noRefCheck() {}}
					hasIconOnly
					renderIcon={() => <Send24 />}
					size="default"
					tabIndex={0}
					type="submit"
				/>
			</Form>
		</>
	);
};

export default FormMessageMolecule;
