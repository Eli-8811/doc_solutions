package com.examen.doc_solutions.model;

import lombok.Data;

@Data
public class Usuario {

	private String nombre;
	private String apellido;
	private String email;
	private String telefono;
	private String fechaIngreso;
	private Double salario;
	private String departamento;
	
}