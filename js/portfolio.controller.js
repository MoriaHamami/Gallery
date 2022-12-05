'use strict'

function onInit() {
    renderGallery()
}

function openModal(projectId) {
 
    var project = getProjectById(projectId)

    var strHtmls = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <div class="modal-body">
                                <!-- Project Details Go Here -->
                                <h2>${project.name}</h2>
                                <p class="item-intro text-muted">${project.title}</p>
                                <img class="img-fluid d-block rounded mx-auto" src="img/portfolio/${project.id}.png" alt="">
                                    <p>${project.desc}</p>
                                    <ul class="list-inline">
                                        <li>Categories: ${project.labels.join(', ')}</li></br>
                                        <li>Date Published: ${new Date(project.publishedAt).toLocaleString('en-GB')}</li>
                                    </ul>
                                    <form action="${project.url}" method="get" target="_blank">
                                        <button class="btn btn-outline-info" type="submit">
                                            <i class="fa fa-heart"></i>
                                              Try it Out</button>
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    document.querySelector('.portfolio-modal').innerHTML = strHtmls
}

function renderGallery() {
    var gallery = getGallery()
    var strHtmls = gallery.map(project => `
        <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href=".portfolio-modal" onclick="openModal('${project.id}')">
                <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                </div>
                </div>
                <img class="img-fluid" src="img/portfolio/${project.id}.png" alt="">
            </a>
            <div class="portfolio-caption sm-w-400">
                <h4>${project.name}</h4>
                <p class="text-muted">${project.title}</p>
            </div>
        </div>
        `
        )

    document.querySelector('.gallery').innerHTML = strHtmls.join('')

}

