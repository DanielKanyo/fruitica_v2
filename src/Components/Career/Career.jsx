import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import img1 from '../../images/wewantyou.jpg';

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

class Career extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div className="Component Career">
				<Card className={classes.cardImg + ' card-image'}>
					<img src={img1} alt="We want you" width="100%" align="middle" />
				</Card>
				<Card className={classes.card}>
					<Card className={classes.cardTitle}>
						{this.props.languageObjectProp.data.career.title}
					</Card>
					<div className="component-text-container career-text-container">
						<p>{this.props.languageObjectProp.data.career.part1}</p>
						<p>{this.props.languageObjectProp.data.career.part2}</p>
						<p>
							{this.props.languageObjectProp.data.career.part3}
							<u className="email-address">{this.props.languageObjectProp.data.career.part4}</u>
						</p>
						<p>{this.props.languageObjectProp.data.career.part5}</p>
					</div>
				</Card>
			</div>
		);
	}
}

Career.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Career);