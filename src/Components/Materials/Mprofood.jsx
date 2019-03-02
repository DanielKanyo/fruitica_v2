import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const styles = {
	card: {
		minWidth: 275,
		padding: '6px 24px'
	},
	cardImg: {
		height: 'auto',
		marginBottom: 14
	},
	cardTitle: {
		marginTop: 14,
		padding: 15,
		background: '#008823',
		color: 'white'
	}
};

class Mprofood extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div className="Component Mprofood">
				<Card className={classes.cardImg + ' card-image'}>
					<div className="card-image-container mprofood-card-image-container"></div>
				</Card>
				<Card className={classes.card}>
					<Card className={classes.cardTitle}>
						{this.props.languageObjectProp.data.mprofood.title}
					</Card>
					<ul>
						{this.props.languageObjectProp.data.mprofood.part1.map((value, i) =>
							<li key={i}>
								<a
									href={"http://www.profood.hu/hu/termekeink/husipar/" + this.props.languageObjectProp.data.mprofood.part2[i]}
									target="_blank"
									rel="noopener noreferrer">
									{value}
								</a>
							</li>
						)}
					</ul>
				</Card>
			</div>
		)
	}
}

Mprofood.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Mprofood);