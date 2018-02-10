export const template = document.createElement('div');

template.innerHTML = `
	<div class="folding mg_sm">
		<div class="folding__title" data-folding="header">
			<i class="fa fa-rocket mg_sm" data-folding="header-icon"></i>
			<span data-folding="header-text"></span>
		</div>

		<div class="folding__body" data-folding="body">
			<div class="folding__body_empty" data-folding="body-empty">No data</div>
		</div>
	</div>
`;

export const DATA_ATTRIBUTE = 'data-folding';