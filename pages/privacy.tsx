/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
export default function Home() {
	return (
		<>
			<Head>
				<title>📦 Discord Package Explorer and Viewer | Privacy 📦</title>
			</Head>
			<div className="h-screen mt-10 relative px-20 text-black dark:text-white py-10">
				<h1
					className="text-2xl text-black dark:text-white flex items-center justify-center uppercase"
					style={{
						fontFamily:
							'Ginto,system-ui,-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Arial,sans-serif',
					}}
				>
					📦 Our Privacy Policy
				</h1>

				<div>
					<div>
						<div>
							<p className="font-bold text-xl">Privacy Policy</p>
							<u className="italic">Updated on: Sep 29, 2022</u>
							<p className="pb-1">
								Welcome to <b>Discord Package</b>. Your privacy is very
								important to us.
							</p>
							<p>
								Discord Package is dedicated to protecting the privacy rights of
								our users ("users" or "you"). This Privacy Policy (the "Policy")
								describes the ways we collect, store, use, and manage the
								information, including personal information, that you provide or
								we collect in connection with our website.
							</p>
							<p>
								By using the Service, you are expressing your agreement to this
								Policy and the processing of your data, including your personal
								information, in the manner provided in this Policy. If you do
								not agree to these terms, please do not use the Service.
							</p>
							<p className="py-2 font-bold">Disclosure of information</p>
							<p>
								Discord Package is not in the business of selling your
								information because we simply don't have any information of you.
								<ul className="font-bold list-disc">
									<li>
										We do not store any form of data as we don't have any third
										party services.
									</li>
									<li>
										Our code is fully open sourced and available for inspection
										on the Github repository.
									</li>
									<li>
										We do not have a backend server. Everything runs on the
										frontend.
									</li>
									<li>
										We run the website using Github Pages
										(https://github.com/peterhanania/Discord-Package/deployments/activity_log?environment=github-pages)
										directly from the main repository
									</li>
									<li>
										No database, no storage or any other form of data is stored.
									</li>
								</ul>
							</p>

							<p className="font-bold">General Contact Information</p>
							<p>peter@peterhanania.com</p>
							<p>
								If you have any questions about this Policy, please contact me
								at peter@peterhanania.com
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
