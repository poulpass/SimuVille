<!doctype html>
<html lang="fr">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>SimuVille</title>
</head>

<body>
    <div class="jumbotron">
        <h1 class="text-center">Bienvenue sur SimuVille, le site de simulation de villes</h1>
    </div>

<div id="page_form" class="container">
    <form >
        <div class="form-group1">
            <label for="SelectVilles">Déterminer le nombre de ville</label>
            <div class="input-group mb-3">
                <select class="custom-select" name="SelectVilles" id="SelectVilles">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>

            <div class="form-group">
                <label for="selectAnnees">Déterminer le nombre d'années de la simulation</label>
                <div class="input-group mb-3">
                    <input  type="number" class="form-control" name="nb-year" min="1" max="20000" id="selectAnnees" value="1">
                </div>
            </div>
            <button id="valideVille" type="button" class="btn btn-secondary">Paramétrer les villes</button>
    </form>
  </div>
</div>
<!--//////////////////////////////////////////////////////////////////////////////////////////////
FORMULAIRES VILLES
//////////////////////////////////////////////////////////////////////////////////////////////-->

        <div id="formulaires_villes" class="container-fluid">
            <div class="row">
                <div class="col-10">
                    <div class="row">

                        <div id="formulaire1" class="col-4 collapse">
                            <h3>ville 1</h3>
                            <p>Population initiale :</p>
                            <input type="number" class="form-control" id="popVille1" name="popVille1" value="2" step="1" min="2"
                                 />
                            <p>taux de natalité :</p>
                            <input type="number" class="form-control" id="natVille1" name="natVille1" value="0.001" step="0.001"
                                min="0" max="2" />
                            <p>taux de mortalité :</p>
                            <input type="number" class="form-control" id="mortVille1" name="mortVille1" value="0.001" step="0.001"
                                min="0" max="2" />
                        </div>

                        <div id="formulaire2" class="col-4 collapse">
                            <h3>ville 2</h3>
                            <p>Population initiale :</p>
                            <input type="number" class="form-control" id="popVille2" name="popVille2" value="2" step="1" min="2"
                                max="5000" />
                            <p>taux de natalité :</p>
                            <input type="number" class="form-control" id="natVille2" name="natVille2" value="0.001" step="0.001"
                                min="0" max="2" />
                            <p>taux de mortalité :</p>
                            <input type="number" class="form-control" id="mortVille2" name="mortVille2" value="0.001" step="0.001"
                                min="0" max="2" />
                        </div>

                        <div id="formulaire3" class="col-4 collapse">
                            <h3>ville 3</h3>
                            <p>Population initiale :</p>
                            <input type="number" class="form-control" id="popVille3" name="popVille3" value="2" step="1" min="2"
                                max="5000" />
                            <p>taux de natalité :</p>
                            <input type="number" class="form-control" id="natVille3" name="natVille3" value="0.001" step="0.001"
                                min="0" max="1" />
                            <p>taux de mortalité :</p>
                            <input type="number" class="form-control" id="mortVille3" name="mortVille3" value="0.001" step="0.001"
                                min="0" max="1" />
                        </div>

                    </div>
                </div>
                <div class="col-2">
                    <button id="startButton" type="button" class="btn btn-danger btn-lg btn-block h-100 collapse">Lancer la
                        simulaton</button>
                </div>

            </div>

        </div>
    </div>
    <!--//////////////////////////////////////////////////////////////////////////////////////////////
SIMULATION
//////////////////////////////////////////////////////////////////////////////////////////////-->
    <div id="page_simu">
        <div>
            <h3 id="chrono" class="text-center">chrono</h3>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div id="divVille1" class="col-4">
                    <h3>Ville 1</h3>
                    <span>Population :</span>
                    <span id="popVille1Live"></span>
                    <div id="maisonsVille1"></div>
                </div>
                <div class="col-4">
                    <h3>Ville 2</h3>
                    <span>Population :</span>
                    <span id="popVille2Live"></span>
                    <div id="maisonsVille2"></div>
                </div>
                <div class="col-4">
                    <h3>Ville 3</h3>
                    <span>Population :</span>
                    <span id="popVille3Live"></span>
                    <div id="maisonsVille3"></div>
                </div>
            </div>
        </div>
    </div>
    <!--//////////////////////////////////////////////////////////////////////////////////////////////
LE RESULTAT
//////////////////////////////////////////////////////////////////////////////////////////////-->
    <div id="page_resultat" class="container">
        <div>
            <p>Voici le résumé de votre simulation</p>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Paramètres</th>
                    <th scope="col">Ville 1</th>
                    <th scope="col">Ville 2</th>
                    <th scope="col">Ville 3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Nombre d'années de simulation</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">Population initiale</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">Population finale</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                <tr>
                    <th scope="row">Taux de natalité</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">Taux de mortalité</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">Catastrophes</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script>
    <script src="script.js"></script>
</body>

</html>