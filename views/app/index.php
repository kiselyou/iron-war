<?php
use yii\helpers\Url;
?>

<div id="main-container-canvas"></div>
<div class="container-fluid" id="block-panels">


	<div class="row m-1">

		<div class="settings">

			<div class="row m-1">
				<div class="column p-1 col-12 col-sm-12 col-md-12 col-lg-6">


					<div class="folding mt-1">
						<div class="folding__title">
							<i class="fa fa-cogs"></i>
							<span>Характеристики карабля</span>
						</div>

						<div class="folding__body folding__body_gray">

							<label for="explorer_1" class="settings__container-img settings__container-img_big">
								<img src="./textures/ships/explorer.png" class="settings__img">
								<input type="radio" id="explorer_1" name="ship" class="settings__radio">
							</label>

							<div class="row m-0 mt-1">

								<div class="column p-1 col-12 col-sm-12 col-md-12 col-lg-12">
									<h4>Explorer II</h4>
								</div>
							</div>

							<div class="row m-0 mt-1">

								<div class="column p-1 col-12 col-sm-12 col-md-12 col-lg-12">

									<table class="settings__table settings__table_bordered">
										<thead class="settings__table-header">
											<tr>
												<th>Елементы</th>
												<th width="100px">Текущее</th>
												<th width="100px">Макс.</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Класс</td>
												<td>II</td>
												<td>II</td>
											</tr>
											<tr>
												<td>Корпус</td>
												<td>2000 ед.</td>
												<td>3500 ед.</td>
											</tr>
											<tr>
												<td>Броня</td>
												<td>4%</td>
												<td>8%</td>
											</tr>
											<tr>
												<td>Щиты</td>
												<td>2 x 2500</td>
												<td>4 x 2500</td>
											</tr>
											<tr>
												<td>Грузовой отсек</td>
												<td>1500 ед.</td>
												<td>2800 ед.</td>
											</tr>
										</tbody>
									</table>

								</div>

								<div class="column p-1 col-12 col-sm-12 col-md-12 col-lg-12">

									<table class="settings__table settings__table_bordered">
										<thead class="settings__table-header">
											<tr>
												<th>Оборудование</th>
												<th width="1%"></th>
												<th width="55px">Класс</th>
												<th width="100px">Вес</th>
												<th width="100px">Слот</th>
											</tr>
										</thead>
										<tbody>

											<tr>
												<td>Генератор энергии</td>
												<td class="text-center">
													<i class="fa fa-info-circle"></i>
												</td>
												<td>I</td>
												<td>100</td>
												<td>Ядро</td>
											</tr>

											<tr>
												<td>Щит - 2500</td>
												<td class="text-center">
													<i class="fa fa-info-circle"></i>
												</td>
												<td>I</td>
												<td>100</td>
												<td>Ядро</td>
											</tr>

											<tr>
												<td>Щит - 2500</td>
												<td class="text-center">
													<i class="fa fa-info-circle"></i>
												</td>
												<td>I</td>
												<td>100</td>
												<td>Ядро</td>
											</tr>

											<tr>
												<td>Лазерная пушка</td>
												<td class="text-center">
													<i class="fa fa-info-circle"></i>
												</td>
												<td>I</td>
												<td>200</td>
												<td>
													<select style="width: 80px">
														<option>------ / ------</option>
														<option>Левый слот</option>
														<option>Правый слот</option>
													</select>
												</td>
											</tr>

											<tr>
												<td>Лазерная пушка</td>
												<td class="text-center">
													<i class="fa fa-info-circle"></i>
												</td>
												<td>II</td>
												<td>250</td>
												<td>
													<select style="width: 80px">
														<option>------ / ------</option>
														<option>Левый слот</option>
														<option>Правый слот</option>
													</select>
												</td>
											</tr>

										</tbody>
									</table>

								</div>

								<div class="column p-1 col-12 col-sm-12 col-md-12 col-lg-12">

									<table class="settings__table settings__table_bordered">
										<thead class="settings__table-header">
											<tr>
												<th>Боеприпасы</th>
												<th width="1%"></th>
												<th width="55px">Класс</th>
												<th width="100px">Вес</th>
												<th width="100px">Кол-во</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Ракета "К1"</td>
												<td class="text-center">
													<i class="fa fa-info-circle"></i>
												</td>
												<td>I</td>
												<td>200</td>
												<td>20</td>
											</tr>
											<tr>
												<td>Ракета "К2"</td>
												<td class="text-center">
													<i class="fa fa-info-circle"></i>
												</td>
												<td>II</td>
												<td>300</td>
												<td>20</td>
											</tr>
										</tbody>
									</table>

								</div>

							</div>

							<div class="row m-0 mt-1">
								<div class="column p-1 col-12 col-sm-12 col-md-12 col-lg-12 text-right">
									<button class="settings__btn">Управление</button>
									<button class="settings__btn">В космос</button>
								</div>
							</div>

						</div>
					</div>

				</div>


				<div class="column p-1 col-12 col-sm-12 col-md-12 col-lg-6">

					<div class="folding mt-1">
						<div class="folding__title">
							<i class="fa fa-cogs"></i>
							<span>Карабли</span>
						</div>

						<div class="folding__body folding__body_gray">
							<?php for ($i = 0; $i < 2; $i++) : ?>

								<div class="row m-0 mt-1 settings__item">

									<div class="column p-0 col-10 col-sm-10 col-md-10 col-lg-10">
										<div class="settings__container-img">
											<img src="./textures/ships/explorer.png" class="settings__img">
											<i class="fa fa-info-circle settings__info"></i>
										</div>

										<div class="settings__container-text settings__container-text_small">

											<table class="settings__table settings__table_bordered mt-1">
												<thead class="settings__table-header">
												<tr>
													<th colspan="2">Explorer I</th>
												</tr>
												</thead>
												<tbody>
													<tr>
														<td>Класс:</td>
														<td>I</td>
													</tr>
													<tr>
														<td>Корпус:</td>
														<td>2000 ед.</td>
													</tr>
													<tr>
														<td>Броня:</td>
														<td>10%</td>
													</tr>
													<tr>
														<td>Щиты:</td>
														<td>2 x 2500</td>
													</tr>
													<tr>
														<td>Слоты:</td>
														<td>4</td>
													</tr>
												</tbody>
											</table>

										</div>

									</div>

									<div class="column p-0 col-2 col-sm-2 col-md-2 col-lg-2">

										<div class="settings__container-text settings__container-text_small center-block">

											<div class="row m-0">
												<div class="col-12 col-sm-12 col-md-12 col-lg-12 p-0 text-right">
													<button class="settings__btn">Пересесть</button>
												</div>
											</div>
										</div>
									</div>

								</div>

							<?php endfor; ?>
						</div>

					</div>



					<div class="folding mt-1">
						<div class="folding__title">
							<i class="fa fa-cogs"></i>
							<span>Генераторы энергии</span>
						</div>

						<div class="folding__body folding__body_gray">
							<?php for ($i = 0; $i < 2; $i++) : ?>

								<div class="row m-0 mt-1 settings__item">

									<div class="column p-0 col-10 col-sm-10 col-md-10 col-lg-10">
										<div class="settings__container-img settings__container-img_small">
											<img src="./textures/generators/generator.png" class="settings__img">
											<i class="fa fa-info-circle settings__info"></i>
										</div>

										<div class="settings__container-text settings__container-text_small">

											<table class="settings__table settings__table_bordered mt-1">
												<thead class="settings__table-header">
												<tr>
													<th colspan="2">Генератор "RS-2"</th>
												</tr>
												</thead>
												<tbody>
													<tr>
														<td>Класс:</td>
														<td>I</td>
													</tr>
													<tr>
														<td>Скорость восстановления:</td>
														<td>6 ед.сек.</td>
													</tr>
													<tr>
														<td>Вес:</td>
														<td>200</td>
													</tr>
												</tbody>
											</table>

										</div>

									</div>

									<div class="column p-0 col-2 col-sm-2 col-md-2 col-lg-2">

										<div class="settings__container-text settings__container-text_small center-block">

											<div class="row m-0">
												<div class="col-12 col-sm-12 col-md-12 col-lg-12 p-0 text-right">
													<button class="settings__btn">Установить</button>
												</div>
											</div>
										</div>
									</div>

								</div>

							<?php endfor; ?>
						</div>

					</div>


					<div class="folding mt-1">
						<div class="folding__title">
							<i class="fa fa-cogs"></i>
							<span>Защитный щит</span>
						</div>

						<div class="folding__body folding__body_gray">
							<?php for ($i = 0; $i < 2; $i++) : ?>

								<div class="row m-0 mt-1 settings__item">

									<div class="column p-0 col-10 col-sm-10 col-md-10 col-lg-10">
										<div class="settings__container-img">
											<img src="./textures/generators/generator.png" class="settings__img">
											<i class="fa fa-info-circle settings__info"></i>
										</div>

										<div class="settings__container-text settings__container-text_small">

											<table class="settings__table settings__table_bordered mt-1">
												<thead class="settings__table-header">
													<tr>
														<th colspan="2">Щит "RS-2"</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>Класс:</td>
														<td>I</td>
													</tr>
													<tr>
														<td>Объем:</td>
														<td>2500 ед.</td>
													</tr>
													<tr>
														<td>Вес:</td>
														<td>200</td>
													</tr>
												</tbody>
											</table>

										</div>

									</div>

									<div class="column p-0 col-2 col-sm-2 col-md-2 col-lg-2">

										<div class="settings__container-text settings__container-text_small center-block">

											<div class="row m-0">
												<div class="col-12 col-sm-12 col-md-12 col-lg-12 p-0 text-right">
													<button class="settings__btn">Установить</button>
												</div>
											</div>
										</div>
									</div>

								</div>

							<?php endfor; ?>
						</div>

					</div>


					<div class="folding mt-1">
						<div class="folding__title">
							<i class="fa fa-cogs"></i>
							<span>Дрон</span>
						</div>

						<div class="folding__body folding__body_gray">
							<?php for ($i = 0; $i < 2; $i++) : ?>

								<div class="row m-0 mt-1 settings__item">

									<div class="column p-0 col-10 col-sm-10 col-md-10 col-lg-10">
										<div class="settings__container-img settings__container-img_small">
											<img src="./textures/generators/generator.png" class="settings__img">
											<i class="fa fa-info-circle settings__info"></i>
										</div>

										<div class="settings__container-text settings__container-text_small">

											<table class="settings__table settings__table_bordered mt-1">
												<thead class="settings__table-header">
													<tr>
														<th colspan="2">Дрон "RS-2"</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>Класс:</td>
														<td>I</td>
													</tr>
													<tr>
														<td>Скорость восстановления корпуса:</td>
														<td>4 ед.сек.</td>
													</tr>
													<tr>
														<td>Вес:</td>
														<td>200</td>
													</tr>
												</tbody>
											</table>

										</div>

									</div>

									<div class="column p-0 col-2 col-sm-2 col-md-2 col-lg-2">

										<div class="settings__container-text settings__container-text_small center-block">

											<div class="row m-0">
												<div class="col-12 col-sm-12 col-md-12 col-lg-12 p-0 text-right">
													<button class="settings__btn">Взять на борт</button>
												</div>
											</div>
										</div>
									</div>

								</div>

							<?php endfor; ?>
						</div>

					</div>



					<div class="folding mt-1">
						<div class="folding__title">
							<i class="fa fa-cogs"></i>
							<span>Оружие</span>
						</div>

						<div class="folding__body folding__body_gray">
							<?php for ($i = 0; $i < 2; $i++) : ?>

								<div class="row m-0 mt-1 settings__item">

									<div class="column p-0 col-12 col-sm-8 col-md-8 col-lg-8">
										<div class="settings__container-img">
											<img src="./textures/rockets/rs-28-sarmat-russian-missile-satan-1.png" class="settings__img">
											<i class="fa fa-info-circle settings__info"></i>
										</div>

										<div class="settings__container-text settings__container-text_small">

											<table class="settings__table settings__table_bordered mt-1">
												<thead class="settings__table-header">
													<tr>
														<th colspan="2">Лазерная пушка</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>Класс:</td>
														<td>I</td>
													</tr>
													<tr>
														<td>Скорость:</td>
														<td>2000</td>
													</tr>
													<tr>
														<td>Дальность:</td>
														<td>2000</td>
													</tr>
													<tr>
														<td>Урон:</td>
														<td>2000</td>
													</tr>
													<tr>
														<td>Потребление энергии:</td>
														<td>6 ед.</td>
													</tr>
												</tbody>
											</table>

										</div>

									</div>

									<div class="column p-0 col-12 col-sm-4 col-md-4 col-lg-4">

										<div class="settings__container-text settings__container-text_small center-block">

											<div class="row m-0">
												<div class="col-6 col-sm-6 col-md-6 col-lg-6 p-0">Магазин: <span>20</span></div>
												<div class="col-6 col-sm-6 col-md-6 col-lg-6 p-0 text-right">Грузовой отсек: <span>0</span></div>
											</div>

											<div class="row m-0">
												<div class="col-12 col-sm-12 col-md-12 col-lg-12 p-0">
													<input type="range" list="tickmarks">
												</div>
											</div>

											<div class="row m-0">
												<div class="col-12 col-sm-12 col-md-12 col-lg-12 p-0 text-right">
													<button class="settings__btn">Загрузить</button>
												</div>
											</div>
										</div>
									</div>

								</div>

							<?php endfor; ?>
						</div>

					</div>

					<div class="folding mt-1">
						<div class="folding__title">
							<i class="fa fa-cogs"></i>
							<span>Ракеты</span>
						</div>

						<div class="folding__body folding__body_gray">

							<?php for ($i = 0; $i < 3; $i++) : ?>

								<div class="row m-0 mt-1 settings__item">

									<div class="column p-0 col-12 col-sm-8 col-md-8 col-lg-8">
										<div class="settings__container-img">
											<img src="./textures/rockets/rs-28-sarmat-russian-missile-satan-1.png" class="settings__img">
											<i class="fa fa-info-circle settings__info"></i>
										</div>

										<div class="settings__container-text settings__container-text_small">

											<table class="settings__table settings__table_bordered mt-1">
												<thead class="settings__table-header">
												<tr>
													<th colspan="2">Ракета "Стрекоза"</th>
												</tr>
												</thead>
												<tbody>
												<tr>
													<td>Класс</td>
													<td>I</td>
												</tr>
												<tr>
													<td>Скорость:</td>
													<td>2000</td>
												</tr>
												<tr>
													<td>Дальность:</td>
													<td>2000</td>
												</tr>
												<tr>
													<td>Урон:</td>
													<td>2000</td>
												</tr>
												</tbody>
											</table>

										</div>

									</div>

									<div class="column p-0 col-12 col-sm-4 col-md-4 col-lg-4">

										<div class="settings__container-text settings__container-text_small center-block">

											<div class="row m-0">
												<div class="col-6 col-sm-6 col-md-6 col-lg-6 p-0">Магазин: <span>20</span></div>
												<div class="col-6 col-sm-6 col-md-6 col-lg-6 p-0 text-right">Грузовой отсек: <span>0</span></div>
											</div>

											<div class="row m-0">
												<div class="col-12 col-sm-12 col-md-12 col-lg-12 p-0">
													<input type="range" list="tickmarks">
												</div>
											</div>

											<div class="row m-0">
												<div class="col-12 col-sm-12 col-md-12 col-lg-12 p-0 text-right">
													<button class="settings__btn">Загрузить</button>
												</div>
											</div>
										</div>
									</div>

								</div>

							<?php endfor; ?>

						</div>
					</div>

				</div>

			</div>

		</div>

	</div>

</div>