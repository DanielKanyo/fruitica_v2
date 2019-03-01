import React, { Component } from 'react';
import img1 from '../../images/kormany_tamogatas_logo.jpg';
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

class Competition1 extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div className="Component Competition1">
				<Card className={classes.card}>
					<Card className={classes.cardTitle}>
						{this.props.languageObjectProp.data.menuItems[0].subItems[0]}
					</Card>
					<p>{this.props.languageObjectProp.data.competition1.part1}</p>
					<p>{this.props.languageObjectProp.data.competition1.part2}</p>
					<p>{this.props.languageObjectProp.data.competition1.part3}</p>
					<p>{this.props.languageObjectProp.data.competition1.part4}</p>
					<p>{this.props.languageObjectProp.data.competition1.part5}</p>
					<p>
						<b>{this.props.languageObjectProp.data.competition1.part6} </b>
						{this.props.languageObjectProp.data.competition1.part7}
					</p>
					<p>
						<b>{this.props.languageObjectProp.data.competition1.part8} </b>
						{this.props.languageObjectProp.data.competition1.part9}
					</p>
					<p>
						<b>{this.props.languageObjectProp.data.competition1.part10}</b><br />
						<span>{this.props.languageObjectProp.data.competition1.part11}</span><br />
						<span>{this.props.languageObjectProp.data.competition1.part12}</span><br />
						<span>{this.props.languageObjectProp.data.competition1.part13}</span><br />
						<span>{this.props.languageObjectProp.data.competition1.part14}</span><br />
						<span><a target="_blank" rel="noopener noreferrer" href="https://www.fruitica.rs/">www.fruitica.rs</a></span>
						<img src={img1} alt="kormany_tamogatas_logo" width="100%" />
					</p>
				</Card>
			</div >
		);
	}
}

Competition1.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Competition1);