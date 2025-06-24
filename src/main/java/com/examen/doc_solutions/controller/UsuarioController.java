package com.examen.doc_solutions.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examen.doc_solutions.entity.UsuarioEntity;
import com.examen.doc_solutions.model.Usuario;
import com.examen.doc_solutions.service.UsuarioService;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequestMapping("/empleados")
@RestController
@AllArgsConstructor
public class UsuarioController {
	
	private final UsuarioService usuarioService;
	
	@PostMapping(path = "/insert")
	public Usuario insert(@RequestBody Usuario usuario) {
		log.debug(usuario.getEmail());
		this.usuarioService.insert(usuario);
		return usuario;	
	}
	
	@PutMapping("/update/{id}")
	public Usuario update(@PathVariable Long id, @RequestBody Usuario usuario) {		
		log.debug(id.toString());
		this.usuarioService.update(usuario, id);
		return usuario;	
	}
	
	@GetMapping("/select/{id}")
	public UsuarioEntity select(@PathVariable Long id) {
		UsuarioEntity existingUser = usuarioService.findById(id);			
		return existingUser;			
	}
	
	@GetMapping("/select/all")
	public List<UsuarioEntity> selectAll() {
		List<UsuarioEntity> existingUser = usuarioService.selectAll();			
		return existingUser;			
	}
	
	
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable Long id) {
		usuarioService.deleteById(id);			
		return "Usuario eliminado correctamente";			
	}

}
