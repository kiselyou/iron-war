export const template = document.createElement('div');

template.innerHTML = `
	<div class="keyboard">
		<div class="keyboard__item" data-keyboard="item">
			<div class="keyboard__img">
				<span data-keyboard="key"></span>
			</div>
			<div class="keyboard__text" data-keyboard="text"></div>
		</div>
	</div>
`;

export const DATA_ATTRIBUTE = 'data-keyboard';