import React from 'react';

import { Box, Button, Grommet } from 'grommet';

const SimpleButton = (props) => (
	<Grommet>
		<Box align="start">
			<Button label="Submit" onClick={() => {}} {...props} />
		</Box>
	</Grommet>
);

export default SimpleButton;
