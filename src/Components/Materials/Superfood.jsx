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

class Superfood extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div className="Component Superfood">
				<Card className={classes.cardImg + ' card-image'}>
					<div className="card-image-container supperfood-card-image-container"></div>
				</Card>
				<Card className={classes.card}>
					<Card className={classes.cardTitle}>
						{this.props.languageObjectProp.data.supperfood.title}
					</Card>
					<h4>{this.props.languageObjectProp.data.supperfood.part1}</h4>
					<p>{this.props.languageObjectProp.data.supperfood.part2}</p>
					<h4>{this.props.languageObjectProp.data.supperfood.part3}</h4>
					<p>{this.props.languageObjectProp.data.supperfood.part4}</p>
					<p>{this.props.languageObjectProp.data.supperfood.part5}</p>
				</Card>
			</div>
		)
	}
}

Superfood.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Superfood);