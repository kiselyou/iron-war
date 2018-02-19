<?php
use yii\helpers\Url;
use app\widgets\table\Table;

?>

<div id="main-container-canvas"></div>

<div class="container-fluid" id="block-panels">

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

									<?=
										Table::factory()
											->addColumn('Елементы')
											->addColumn('Текущее')
											->addColumn('Макс.')
											->setData([
												['Класс', 'II', 'III'],
												['Корпус', '2000 ед.', '3500 ед.'],
												['Броня', '4%', '8%'],
												['Щиты', '2 x 2500', '4 x 2500'],
												['Грузовой отсек', '1500 ед.', '2800 ед.']
											])
											->toHtml();
									?>

								</div>
<!--
								<div class="column p-1 col-12 col-sm-12 col-md-12 col-lg-12">

									<?/*=
										Table::factory()
											->addColumn('Оборудование', null, 2)
											->addColumn('Класс')
											->addColumn('Вес')
											->addColumn('Слот')
											->setData([
												['Генератор энергии', '<i class="fa fa-info-circle"></i>', 'I', 100, 'Ядро'],
												['Щит - 2500', '<i class="fa fa-info-circle"></i>', 'I', 100, 'Ядро'],
												['Щит - 2500', '<i class="fa fa-info-circle"></i>', 'I', 100, 'Ядро'],
												['Лазерная пушка', '<i class="fa fa-info-circle"></i>', 'I', 200, '
													<select style="width: 80px">
														<option>------ / ------</option>
														<option>Левый слот</option>
														<option>Правый слот</option>
													</select>
												'],
												['Лазерная пушка', '<i class="fa fa-info-circle"></i>', 'I', 200, '
													<select style="width: 80px">
														<option>------ / ------</option>
														<option>Левый слот</option>
														<option>Правый слот</option>
													</select>
												'],
											])
											->toHtml();
									*/?>

								</div>

								<div class="column p-1 col-12 col-sm-12 col-md-12 col-lg-12">

									<?/*=
										Table::factory()
											->addColumn('Боеприпасы')
											->addColumn('', '1%')
											->addColumn('Класс', '55px')
											->addColumn('Вес', '100px')
											->addColumn('Кол-во', '100px')
											->setData([
												['Ракета "К1"', '<i class="fa fa-info-circle"></i>', 'I', 200, 20],
												['Ракета "К2"', '<i class="fa fa-info-circle"></i>', 'II', 300, 20]
											])
											->toHtml();
									*/?>

								</div>
								-->
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

					<?= $this->render('/app/layout/folding.php', ['title' => 'Карабли', 'render' => '/app/layout/ships.php']) ?>
					<!--
					<?/*= $this->render('/app/layout/folding.php', ['title' => 'Дрон', 'render' => '/app/layout/drones.php']) */?>
					<?/*= $this->render('/app/layout/folding.php', ['title' => 'Оружие', 'render' => '/app/layout/weapons.php']) */?>
					<?/*= $this->render('/app/layout/folding.php', ['title' => 'Ракеты', 'render' => '/app/layout/rockets.php']) */?>
					<?/*= $this->render('/app/layout/folding.php', ['title' => 'Защитный щит', 'render' => '/app/layout/armors.php']) */?>
					<?/*= $this->render('/app/layout/folding.php', ['title' => 'Генераторы энергии', 'render' => '/app/layout/energy.php']) */?>
					-->

				</div>

			</div>

		</div>

</div>
