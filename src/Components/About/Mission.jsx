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

class Mission extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div className="Component Mission">
				<Card className={classes.card}>
					<Card className={classes.cardTitle}>
						{this.props.languageObjectProp.data.menuItems[0].items[1]}
					</Card>
					<div className="component-text-container">
						<p>{this.props.languageObjectProp.data.mission.part1}</p>
						<br />
						<p>{this.props.languageObjectProp.data.mission.part2}</p>
						<br />
						<p>{this.props.languageObjectProp.data.mission.part3}</p>
						<p>{this.props.languageObjectProp.data.mission.part4}</p>
						<p>{this.props.languageObjectProp.data.mission.part5}</p>
						<ul>
							<li>{this.props.languageObjectProp.data.mission.part6}</li>
							<li>{this.props.languageObjectProp.data.mission.part7}</li>
							<li>{this.props.languageObjectProp.data.mission.part8}</li>
							<li>{this.props.languageObjectProp.data.mission.part9}</li>
							<li>{this.props.languageObjectProp.data.mission.part10}</li>
							<li>{this.props.languageObjectProp.data.mission.part11}</li>
							<li>{this.props.languageObjectProp.data.mission.part12}</li>
							<li>{this.props.languageObjectProp.data.mission.part13}</li>
							<li>{this.props.languageObjectProp.data.mission.part14}</li>
						</ul>
						<br />
						<table>
							<tbody>
								<tr>
									<td>{this.props.languageObjectProp.data.mission.part15}</td>
									<td>{this.props.languageObjectProp.data.mission.part16}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</Card>
			</div>
		);
	}
}

Mission.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Mission);