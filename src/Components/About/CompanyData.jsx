import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const styles = {
	card: {
		minWidth: 275,
		padding: '6px 24px'
	},
	cardTitle: {
		marginTop: 14,
		padding: 15,
		background: '#008823',
		color: 'white'
	}
};

class CompanyData extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div className="Component CompanyData">
				<Card className={classes.card}>
					<Card className={classes.cardTitle}>
						{this.props.languageObjectProp.data.companyData.title}
					</Card>
					<div className="component-text-container">
						<p>{this.props.languageObjectProp.data.companyData.part1}</p>
						<p>{this.props.languageObjectProp.data.companyData.part2}</p>
						<p>{this.props.languageObjectProp.data.companyData.part3}</p>
						<p>{this.props.languageObjectProp.data.companyData.part4}</p>
						<p>{this.props.languageObjectProp.data.companyData.part5}</p>
					</div>
				</Card>
			</div>
		);
	}
}

CompanyData.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CompanyData);