package com.examen.doc_solutions.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.examen.doc_solutions.entity.UsuarioEntity;
import com.examen.doc_solutions.model.Usuario;
import com.examen.doc_solutions.repository.UsuarioRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UsuarioService {

	private final UsuarioRepository usuarioRepository;

	private final SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");

	public void insert(Usuario usuario) {

		UsuarioEntity usuarioEntity = new UsuarioEntity();

		try {

			Date date = simpleDateFormat.parse(usuario.getFechaIngreso());

			usuarioEntity.setNombre(usuario.getNombre());
			usuarioEntity.setApellido(usuario.getApellido());
			usuarioEntity.setEmail(usuario.getEmail());
			usuarioEntity.setTelefono(usuario.getTelefono());
			usuarioEntity.setFechaIngreso(date);
			usuarioEntity.setSalario(usuario.getSalario());
			usuarioEntity.setDepartamento(usuario.getDepartamento());

			usuarioRepository.save(usuarioEntity);

		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

	}

	public void update(Usuario usuario, Long id) {

		UsuarioEntity usuarioEntity = new UsuarioEntity();

		try {

			Date date = simpleDateFormat.parse(usuario.getFechaIngreso());

			usuarioEntity.setIdUsuario(id);
			usuarioEntity.setNombre(usuario.getNombre());
			usuarioEntity.setApellido(usuario.getApellido());
			usuarioEntity.setEmail(usuario.getEmail());
			usuarioEntity.setTelefono(usuario.getTelefono());
			usuarioEntity.setFechaIngreso(date);
			usuarioEntity.setSalario(usuario.getSalario());
			usuarioEntity.setDepartamento(usuario.getDepartamento());

			usuarioRepository.save(usuarioEntity);

		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

	}

	public UsuarioEntity findById(Long userId) {
	    return usuarioRepository.findById(userId).orElseThrow(() -> new RuntimeException("Usuario no encontrado con ID: " + userId));
	}

	public void deleteById(Long id) {
		usuarioRepository.deleteById(id);
	}

	public List<UsuarioEntity> selectAll() {
		return usuarioRepository.findAll();
	}

}
