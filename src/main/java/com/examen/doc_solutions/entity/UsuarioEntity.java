package com.examen.doc_solutions.entity;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "empleados")
public class UsuarioEntity {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idUsuario;
	
	private String nombre;
	private String apellido;
	private String email;
	private String telefono;
	private Date fechaIngreso;
	private Double salario;
	private String departamento;
	
}