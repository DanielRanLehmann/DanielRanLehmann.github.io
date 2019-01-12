import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { FacebookProvider, Comments } from 'react-facebook';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-md navbar-fixed-top navbar-light bg-white border-bottom main-nav">
            <div className="container">
                <div className="navbar-collapse collapse nav-content order-2">
                    <ul className="nav navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Download</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Register</a>
                        </li>
                    </ul>
                </div>
                <ul className="nav navbar-nav text-nowrap flex-row mx-md-auto order-1 order-md-2">
                    <li className="nav-item">
                      <a className="navbar-brand" href="#">
                        <img style={{"cover": "contain"}} src={require('./assets/logo/sclerose-logo.jpg')} width="200px" height="100%" alt="" />
                      </a>
                    </li>
                    <button className="navbar-toggler ml-2" type="button" data-toggle="collapse" data-target=".nav-content" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </ul>
                <div className="ml-auto navbar-collapse collapse nav-content order-3 order-md-3">
                    <ul className="ml-auto nav navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Rates</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Help</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
          </nav>
        <article className="mt-4">
          <div className="container">
            <h1>Søvn og sclerose</h1>
            <div className="row mt-4 mb-4">
              <div className="col text-center">
                <figure className="figure">
                  <img src="http://sclerose.info/wp-content/uploads/2018/07/sclerose_soevn.jpg" className="figure-img img-fluid" alt="" />
                  <figcaption className="text-left figure-caption">A caption for the above image.</figcaption>
                </figure>
              </div>
            </div>

            <p className="font-weight-bold display-header-1">
            Træthed og søvn er ikke det samme !!
            </p>
            <p>
            Dette kan være en lang tekst for dig at læse.
            Der er mange informationer – derfor vil vi råde dig til at lade din(e) pårørende læse den også og sammen snakke om søvn og søvnproblemer – hvis du har det.
            </p>

            <p>
            Vi vil opfordre alle der har søvnproblemer til at lave en søvn-dagbog, vi har døbt den ”Hovedpuden”.
            Vi har lavet en side som du kan downloade og printe og udfylde – hver dag (den er nederst i artiklen)
            Denne ville du i så fald kunne lade blive en del af din personlige MSM (MS Mappe eller Min Sclerose Mappe)
            </p>

            <p>
            Ligeledes sidst i artiklen er det nogle gode råd og ideer til at bedre sin søvn. Du kan evt. printe denne side, og kryds af eller skriv hvordan de enkelte ting virker for dig. IKKE alt på en gang !!
            </p>

            <p>
            Tusind tak til alle der har deltaget i de spørgeskemaer (uha der er nogle der ikke har kunnet lide dem … ) og til at dele erfaring. Uden jer var der ingen artikel eller gode råd.
            </p>

            <p>
            ”Mange” siger – Jeg kan ikke forstå jeg en dræbende træt i løbet af dagen – og så kan jeg ikke sove om aftenen…  …... ???!?!?!?!
            Jeg har ikke sovet i løbet af dagen – men når jeg kommer i seng – så kan jeg ikke sove
            </p>

            <p>
            Hvis du har et ”godt” mønster – du er vågen om dagen – og er klar til at sove om aftenen – men kan ikke …. Så er der noget galt !
            Det MÅ DU IKKE OVERHØRE !!!
            </p>

            <p>
            Hvis du ikke får en ordentlig søvn om natten så sker der ret simpelt det – at din dage efter bliver stresset – du føler dig ”syg” fordi dine symptomer bliver forværet ved manglende søvn – du har ganske givet hovedpine det meste af dagen (som kan tage til i løbet af dagen ) – og kognitivt der roder det !! koncentrationsproblemer – kan ikke holde flere bolde i luften – kan faktisk ikke rigtig noget.
            Denne tilstand tiltager i løbet af dagen – men på en eller anden mærkelig måde, så aftager det for mange sidst på dagen … man liver op.
            Når sengen så skal rammes igen … så er den gal igen !!
            </p>

            <p>
            Det er skruen uden ende.<br/>
            Det er forfærdeligt.
            </p>

            <p>
            Og så sker det at man begynder at frygte at sove om aftenen… natten bliver til mareridt.
            </p>

            <div className="row mt-4 mb-4">
              <div className="col text-center">
                <figure className="figure">
                  <img src="http://sclerose.info/wp-content/uploads/2018/07/sclerose_soevn1.jpg" className="figure-img img-fluid" alt="" />
                  <figcaption className="text-left figure-caption">A caption for the above image.</figcaption>
                </figure>
              </div>
            </div>

            <p>
            Det er vigtigt at tage hånd om.
            For du vil føle din sclerose bliver værre … det gør det egentlig ikke, men fordi du bliver fysisk og kognitivt presset forværres dine symptomer.
            I længden vil denne situation KUNNE at du vil få et angreb (eller tilstanden forværres hvis du er progressiv)
            </p>

            <p>
            Der er forskel om det er fysisk urolighed eller mental urolighed
            Fysisk – der udtaler scleroseramte :
            </p>
            <ul>
              <li>Jeg får kramper i ankler, fødder, lægge, ben</li>
              <li>Jeg har uro i mine ben</li>
              <li>Jeg har uro i min mave og indvendig</li>
              <li>Jeg har uro i ryggen</li>
              <li>Jeg har smerter i ben/led/kogler/ryg</li>
            </ul>

            <p>
            Mentalt – der udtaler scleroseramte:
            </p>
            <ul>
              <li>Mine tanker kan ikke stoppe</li>
              <li>Jeg bliver usikker og bange for ?? når det bliver nat</li>
              <li>Jeg får angst for min familie og mig selv når det bliver nat</li>
              <li>Jeg får smerter i mit hoved</li>
            </ul>

            <p className="font-weight-bold">
            Derfor – gør noget ved det!!
            </p>

            <p>
            Du skal tale med din almindelige praktiserende læge om det.
            Du kan tale med din scleroselæge/neurolog om det.
            Der rigtig mange råd og måder til hvordan man kan få en bedre søvn.
            Det behøver ikke kun at være medicinsk.
            I øvrigt er sovemedicin noget skidt !!!
            Man bliver afhængig af det – og som scleroseramt kan det blive en meget farlig vej at man både fysisk og mentalt bliver afhængig af at skulle have den der pille hver aften … :-/ Pas på!
            Det samme gør sig gældende med alkohol!<br/>
            (rådgiv dig med din(e) læge(r)
            </p>

            <p>
            Bed om at bliv henvist til specialist.
            Det kan godt være at din neurolog er dygtig – eller din læge – men det er vigtigt at VI SCLEROSERAMTE bliver henvist til specialister på vores symptomer.
            Om det er søvnbesvær, neuropsykologi, kognition, blæreproblemer eller Sexualitet problem osv. osv. – bed om at blive henvist.
            </p>

            <p>
            På en kongres for nogle år siden – der lyttede jeg til en amerikansk neurolog – som sagde de kloge ord.
            Jeg henviser altid min scleroseramte til andre specialister – både for at sikre det er det helt rette og nye behandling de får – men også fordi at man simpelthen ikke kan sig fuldstændig ajour indenfor alle symptomer.
            Det er for de scleroseramte – de skal have den bedst tænkelig behandling!
            </p>

            <div className="row mt-4 mb-4">
              <div className="col text-center">
                <figure className="figure">
                  <img src="http://sclerose.info/wp-content/uploads/2018/07/sclerose_soevn2.jpg" className="figure-img img-fluid" alt="" />
                  <figcaption className="text-left figure-caption">A caption for the above image.</figcaption>
                </figure>
              </div>
            </div>

            <p>
            Det er rigtigt !.
            Så – spørg din læge – og bed om henvisning hvis han/hun ikke er 100% på det
            </p>

            <p>
            Når alt dette er skrevet – så findes der mange gode råd og mange gode ideer til hvad man kan gøre.
            Hvordan skal du forholde dig inden du går i seng – hvad kan man gøre – hvad skal man endelig ikke gøre osv. osv.
            </p>

            <p>
            Sclerose.info har samlet nogle af de mangfoldig råd og teknikker sammen – og bringer dem her.
            </p>

            <p>
            Du kan prøve dig frem – MEN HUSK – ikke gøre det hele på en gang – ikke noget med a prøve for mange ting – for så roder det hele bare sammen uden nogen som helst virkning.
            </p>

            <p>
            Mange har nogle rigtig gode metoder allerede – og hvis din måde virker for dig – så skal du IKKE skifte eller prøve noget andet.
            Gammelt IT sprog – if it aint broke – dont fix it´! (hvis den ikke er I stykker så lad vær med at begynde at reparere den!)
            </p>




          </div>
        </article>

        <div className="fb-comments">
          <FacebookProvider appId="285817888824431">
            <Comments href="http://sclerose.info/soevn-og-sclerose/" />
          </FacebookProvider>
        </div>

      </div>
    );
  }
}

export default App;
