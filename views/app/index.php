<?php
use yii\helpers\Url;
?>
<div id="main-container-canvas"></div>
<div class="container-fluid" id="block-panels">


	<div class="folding">
		<div class="folding__title">
			<i class="fa fa-cogs"></i>
			<span>Ship settings</span>
		</div>

		<div class="folding__body">

			<div class="row m-1">

				<div class="settings">

					<div class="row m-1">
						<div class="column p-1 col-xs-12 col-sm-4 col-md-4 col-lg-4">

							<div class="settings__board">

								<label for="explorer_1" class="settings__img">
									<img src="./textures/ships/explorer.png" class="settings__img_center">
									<input type="radio" id="explorer_1" name="ship" class="settings__radio">
								</label>

								<label for="explorer_2" class="settings__img">
									<img src="./textures/ships/explorer.png" class="settings__img_center">
									<input type="radio" id="explorer_2" name="ship" class="settings__radio">
								</label>

							</div>

						</div>

						<div class="column p-1 col-xs-12 col-sm-4 col-md-4 col-lg-4">

							<div class="settings__board">

								<label for="rocket_1" class="settings__img">
									<img src="./textures/ships/explorer.png" class="settings__img_center">
									<input type="checkbox" id="rocket_1" name="ship" class="settings__radio">
								</label>

								<label for="rocket_2" class="settings__img">
									<img src="./textures/ships/explorer.png" class="settings__img_center">
									<input type="checkbox" id="rocket_2" name="ship" class="settings__radio">
								</label>

							</div>

						</div>


						<div class="column p-1 col-xs-12 col-sm-4 col-md-4 col-lg-4">

							<div class="settings__board">

								<label for="rocket_1" class="settings__img">
									<img src="./textures/ships/explorer.png" class="settings__img_center">
									<input type="checkbox" id="rocket_1" name="ship" class="settings__radio">
								</label>

								<label for="rocket_2" class="settings__img">
									<img src="./textures/ships/explorer.png" class="settings__img_center">
									<input type="checkbox" id="rocket_2" name="ship" class="settings__radio">
								</label>

							</div>

						</div>

					</div>


					<div class="">

						<label>Speed
							<input type="range" list="tickmarks">
						</label>

						<label>Health
							<input type="range" list="tickmarks">
						</label>

						<label>Armor
							<input type="range" list="tickmarks">
						</label>

					</div>

				</div>

			</div>

		</div>
	</div>

</div>