import HTTPStatus from 'http-status';

const Alunos = require('../../models/alunos')

export async function signUp(req, res) {
  try {
    const aluno = await Alunos.create(req.body);
    return res.status(HTTPStatus.CREATED).json(aluno.toAuthJSON());
  } catch (e) {
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

export function login(req, res, next) {
  res.status(HTTPStatus.OK).json(req.aluno.toAuthJSON());

  return next();
}
