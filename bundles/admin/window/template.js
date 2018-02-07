export const template = document.createElement('div');

template.innerHTML = `
	<div class="modal show">
		<div class="modal-dialog">
			<div class="modal-content" data-modal="container">
				<div class="modal-header" data-modal="header">
					<button type="button" class="close" data-modal="close">&times;</button>
					<h4 class="modal-title">
						<i class="glyphicon glyphicon-info-sign" data-modal="icon"></i>
						<span data-modal="header-text"></span>
					</h4>
				</div>
				<div class="modal-body" data-modal="body"></div>
				<div class="modal-footer" data-modal="footer">
					<button type="button" class="btn btn-sm btn-primary" data-modal="btn-primary"></button>
					<button type="button" class="btn btn-sm btn-default" data-modal="btn-default"></button>
					<button type="button" class="btn btn-sm btn-danger" data-modal="btn-danger"></button>
					<button type="button" class="btn btn-sm btn-warning" data-modal="btn-warning"></button>
					<button type="button" class="btn btn-sm btn-success" data-modal="btn-success"></button>
				</div>
			</div>
		</div>
	</div>
`;

export const iconClass = 'glyphicon glyphicon-';