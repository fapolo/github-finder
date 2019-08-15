import React, { Fragment, Component } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class User extends Component {
  componentDidMount() {
    //getUser passado pelo app.js
    //this.props.match.params.login pega o login da URL
    this.props.getUser(this.props.match.params.login);
  }
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      company,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Voltar para a Busca
        </Link>
        Disponível para Trabalho:{" "}
        {hireable ? (
          <i className='fas fa-check text-success' />
        ) : (
          <i className='fas fa-times-circle text-danger' />
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              className='round-img'
              alt=''
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>Local: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Descrição:</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn btn-dark my-1'>
              Perfil no GitHub
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Usuário: </strong> {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Empresa: </strong> {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Site: </strong> {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Seguidores: {followers}</div>
          <div className='badge badge-success'>Seguindo: {following}</div>
          <div className='badge badge-light'>
            Repos públicos: {public_repos}
          </div>
          <div className='badge badge-dark'>Gists públicos: {public_gists}</div>
        </div>
      </Fragment>
    );
  }
}

export default User;
