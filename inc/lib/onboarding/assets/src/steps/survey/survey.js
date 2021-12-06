import React from 'react';
import { __ } from '@wordpress/i18n';

const SurveyForm = ( { updateFormDetails } ) => {
	return (
		<>
			<p className="label-text row-label">
				{ __( 'Tell us a little bit about yourself', 'astra-sites' ) }
			</p>
			<div className="survey-fields-wrap">
				<input
					type="text"
					className="survey-text-input"
					name="first_name"
					placeholder={ __( 'Your First Name', 'astra-sites' ) }
					onChange={ ( e ) =>
						updateFormDetails( 'first_name', e.target.value )
					}
				/>
				<input
					type="email"
					className="survey-text-input"
					name="email"
					placeholder={ __( 'Your Work Email', 'astra-sites' ) }
					onChange={ ( e ) =>
						updateFormDetails( 'email', e.target.value )
					}
				/>
				<select
					name="wp_user_type"
					className="survey-select-input"
					defaultValue=""
					onBlur={ ( e ) =>
						updateFormDetails( 'wp_user_type', e.target.value )
					}
				>
					<option value="" disabled>
						{ __( 'I am…', 'astra-sites' ) }
					</option>
					<option value="1">
						{ __( 'Beginner', 'astra-sites' ) }
					</option>
					<option value="2">
						{ __( 'Intermidiate', 'astra-sites' ) }
					</option>
					<option value="3">{ __( 'Expert', 'astra-sites' ) }</option>
				</select>
				<select
					name="build_website_for"
					className="survey-select-input"
					defaultValue=""
					onBlur={ ( e ) =>
						updateFormDetails( 'build_website_for', e.target.value )
					}
				>
					<option value="" disabled>
						{ __( 'I am building website for…', 'astra-sites' ) }
					</option>
					<option value="1">
						{ __( 'Myself/My Company', 'astra-sites' ) }
					</option>
					<option value="2">
						{ __( 'My Client', 'astra-sites' ) }
					</option>
				</select>
			</div>
		</>
	);
};

export default SurveyForm;
