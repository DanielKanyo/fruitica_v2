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

class Wild extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div className="Component Wild">
				<Card className={classes.cardImg + ' card-image'}>
					<div className="card-image-container wild-card-image-container"></div>
				</Card>
				<Card className={classes.card}>
					<Card className={classes.cardTitle}>
						{this.props.languageObjectProp.data.wild.title}
					</Card>
					<p>{this.props.languageObjectProp.data.wild.part1}</p>
					<p>{this.props.languageObjectProp.data.wild.part2}</p>
					<p>{this.props.languageObjectProp.data.wild.part3}</p>
					<p>{this.props.languageObjectProp.data.wild.part4}</p>
					<p>{this.props.languageObjectProp.data.wild.part5}</p>
					<p>{this.props.languageObjectProp.data.wild.part6}</p>
					<p>
						{this.props.languageObjectProp.data.wild.part7}
						<a target="_blank" rel="noopener noreferrer" href="https://www.wildflavors.com/">
							{this.props.languageObjectProp.data.wild.part8}
						</a>
					</p>
					<p>{this.props.languageObjectProp.data.wild.part9}</p>
					<p>{this.props.languageObjectProp.data.wild.part10}</p>
				</Card>
			</div>
		)
	}
}

Wild.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Wild);